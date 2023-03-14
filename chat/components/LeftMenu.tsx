import { Button, createStyles, makeStyles, Stack, Theme } from "@mui/material"
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from '@mui/icons-material/Telegram';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const leftmenu=()=>{
    
    return(
        
        <Stack flexDirection={'column'} sx={{ backgroundColor:'#262626', height:'100%'}}>
        {/* sx={{ backgroundColor: { md: 'green', xs: 'red' }, width: {md: '1',xs:'100'} }} */}

            <Button sx={{
                marginTop: '180px', borderRadius: '1px', cursor: 'pointer', "&:hover": {
                    backgroundColor: 'black'}
            }}
            ><MessageIcon sx={{ fontSize: '20px', color: 'white',mr:'12px',alignItems:'center'}} /></Button>

            <Button sx={{ marginTop: '10px', borderRadius: '1px', cursor: 'pointer', "&:hover": {
                    backgroundColor: 'black'}
            }}
            ><MenuIcon sx={{ fontSize: '20px',color: 'white',mr:'12px' }} /></Button>

            <Button sx={{  marginTop: '10px', borderRadius: '1px', cursor: 'pointer', "&:hover": {
                    backgroundColor: 'black'}
            }}
            ><TelegramIcon sx={{ fontSize: '20px',color: 'white',mr:'12px' }} /></Button>

            <Button sx={{  marginTop: '10px', borderRadius: '1px', cursor: 'pointer', "&:hover": {
                    backgroundColor: 'black'}}}
            ><PersonAddIcon sx={{ fontSize: '20px',color: 'white',mr:'12px' }} /></Button>

            <Button sx={{marginTop: '10px', borderRadius: '1px', cursor: 'pointer', "&:hover": {
                    backgroundColor: 'black'}
            }}
            ><NotificationsActiveIcon sx={{ fontSize: '20px',color: 'white',mr:'12px' }} /></Button>

            <Button sx={{ color: 'white', marginTop: '10px', marginLeft: '6px', border: '1px solid white', width: '50px', borderRadius: '15px', cursor: 'pointer', "&:hover": {
                backgroundColor: 'black'
            }}}
            ><SettingsIcon sx={{ fontSize: '20px',color: 'white',mr:'12px' }} /></Button>

            <Button sx={{ color: 'white', marginTop: '10px', marginLeft: '6px', border: '1px solid white', width: '50px', borderRadius: '15px', cursor: 'pointer', "&:hover": {
                backgroundColor: 'black'
            }}}
            ><AccountCircleIcon sx={{ fontSize: '20px',color: 'white',mr:'12px' }} /></Button>
           
        </Stack>
    )
}
export default leftmenu