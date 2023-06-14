
import { Box, Dialog, styled } from "@mui/material";
import Menu from './menu/Menu';
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";


const LeftComponent = styled(Box)`
    min-width: 450px;
    Height: 629.84px;

`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left:  1px solid #DADBDD;
    Height: 629.84px;
    overFlow: hidden;
`

const dialogStyle = {
    height : "95%",
    borderRadius: 0,
    margin: "20px",
    width: "100%",
    maxWidth: "100%",
    maxHeight : "100%",
    boxShadow: "none",
    overFlow: "hidden"
    
}

const Component = styled(Box)`
    display: flex;
`

const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return(
        <Dialog
            open = {true}
            PaperProps={{ sx : dialogStyle }}
            hideBackdrop = {true}
            maxWidth = {'md'}>

            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    
                    { Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }
                </RightComponent>
            </Component>

        </Dialog>
    )
}

export default ChatDialog