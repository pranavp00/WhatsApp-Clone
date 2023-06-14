import { Box, styled } from '@mui/material'
import { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';



const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;

`;

const Wrapper = styled(Box)`
    margin-left: auto;

    & > * {
        margin-left: 2px;
        padding: 10px;
        vertical-align: middle;

    };
    & :first-child{
        font-size: 30px;
        

    }
    
`
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
});

const Header = () => {


    const [openDrawer, setOpenDrawer] = useState(false)
    const { account } = useContext(AccountContext)
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return(
        <>
            <Component>
                <Image src = { account.picture} alt = 'dp' onClick={() => toggleDrawer()} />
                <Wrapper>
                    <GroupsIcon />
                    <DonutLargeIcon />
                    <ChatIcon />
                    <HeaderMenu setOpenDrawer = {setOpenDrawer} />

                </Wrapper>
            </Component>
            <InfoDrawer open = {openDrawer} setOpen = {setOpenDrawer} />
            
        </>
    )
}

export default Header