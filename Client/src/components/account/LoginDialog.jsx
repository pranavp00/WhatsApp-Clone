import { useContext } from 'react'
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material"
import { qrCodeImage } from "../../constants/data"
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../service/api'






const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;  
`
const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top:15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`

const QRcode = styled('img')({
    height: 264,
    widht: 264,
    margin: '50px 0 0 50px'
})

const Component = styled(Box)`
    display: flex;
`

const Container = styled(Box)`
    padding: 56px 0 56px 56px;

`

const dialogStyle = {
    height : "94%",
    marginTop: "12%",
    width: "75%",
    maxWidth: "100%",
    maxHeight : "100%",
    boxShadow: "none",
    overFlow: "hidden"
}


const LoginDialog = () => {


    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) =>{
        
        const userObject = jwt_decode(res.credential);
        localStorage.setItem('user', JSON.stringify(userObject));
        setAccount(userObject);
        console.log(userObject)
        await addUser(userObject);
        
    }

    const onLoginError = (res) => { 
        console.log("Login Failed",res)
    }

    return(
        <Dialog 
            open = {true}
            PaperProps={{ sx : dialogStyle }}
            hideBackdrop = {true}
        >
            <Component>
                <Container>
                    <Title>Use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Something and select Linked Devices</ListItem>
                        <ListItem>3. Tap on Link a device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                    </StyledList>
                </Container>
                <Box style = {{position: "relative"}}>
                    <QRcode src={qrCodeImage} alt = "qr code"/>
                    <Box style = {{position: "absolute",top: "45%",transform: 'translateX(50%)'}}>
                        <GoogleLogin 
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
                
            </Component>

        </Dialog>
    )
}

export default LoginDialog