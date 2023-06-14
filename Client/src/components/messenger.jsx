import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';
//import ChatDialog from './chat/ChatDialog';


const Component = styled(Box)`
    height: 100vh;
    background-color: #eae6df;
`
const Header = styled(AppBar)`
    height : 125px;
    box-shadow: none;
    background-color: #00a884;
`
const LoginHeader = styled(AppBar)`
    height : 218px;
    box-shadow: none;
    background-color: #00a884;
`

const Messenger = () => {

    const { account } = useContext(AccountContext)


    return(

        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog />
                </> 
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
            
        </Component>
        
    )
}

export default Messenger
