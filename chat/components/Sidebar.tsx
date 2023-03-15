import { Message, Opacity } from "@mui/icons-material"
import { Avatar, Box, Button, Grid, Paper, Stack, styled, Tab, useTheme } from "@mui/material"
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
import { Theme } from "@mui/system/createTheme/createTheme";
import { createStyles, makeStyles, } from "@mui/styles";
import TelegramIcon from '@mui/icons-material/Telegram';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Avatara from '../components/Avatara';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Text from './Textmessage'
import TextField from '@mui/material/TextField';
import Textmessage from "./Textmessage";
import RightMenu from "./RightMenu";
import React from "react";
import Body from "./Bodytext";
import Bodytext from "./Bodytext";
import Message_body from "./Message_body";
import LeftMenu from "./LeftMenu";
import Show_message from "./Show_message";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            // flexDirection: "column",
            // justifyContent: "space-between",
            // alignItems: "center",
            // width: "90px",
            // height: "100vh",
            // backgroundColor: "#EEEEEE",
            // position: "fixed",
            // padding: "100px 0px 30px",
            // gap: "223px",
            // left: 0,
            // top: 0,
            color: 'white', marginTop: '10px', marginLeft: '6px', border: '1px solid white', width: '50px', borderRadius: '15px', cursor: 'pointer', "&:hover": {
                backgroundColor: 'black'
            }
        }
    }

    )
)
const Sidebar = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
const theme = useTheme();
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const styles ={
    homeStyle: {
        [theme.breakpoints.up(0)]: {
            overflowY: 'auto',
            overflowX: 'hidden',
            // height: '100vh',
            height:'100%',
            backgroundColor:'#262626'
        },
    },
}
const responsivePaper = {
    flex:{xs:'100%', sm:'calc(50% - 20px)',md:'calc(33% - 20px)'}
}
    return (
        <Grid container spacing={0} columns={30}>

            <Grid item xs={1} sx={{height:'970px'}}> 
                <Paper sx={{backgroundColor:'black', height:'100%'}}>
                    
                    <LeftMenu />
                </Paper>
            </Grid>
            
            <Grid item xs={5} sx={{backgroundColor:'#262626'}}>
                
                <Paper > <Show_message/></Paper>
            </Grid>

            <Grid item xs={19}>
                <Paper sx={{height:'100%'}}><Message_body/></Paper>
            </Grid>

            <Grid item xs={5}  >
                <Paper sx={[styles.homeStyle]}>
                    <RightMenu/>
                    
                    </Paper>
            </Grid>

        </Grid>
        
        // <Stack flexDirection={'row'} sx={{display:'flex'  }} > 


        //     <Stack flexDirection={'column'} sx={{ backgroundColor:'#262626',width:'4%'}}>
        //     {/* sx={{ backgroundColor: { md: 'green', xs: 'red' }, width: {md: '1',xs:'100'} }} */}

        //         {/* <Button sx={{
        //             marginTop: '180px', border: '1px solid white', width: '50px', borderRadius: '15px', marginLeft: '6px', cursor: 'pointer', "&:hover": {
        //                 backgroundColor: 'black'}
        //         }}
        //         ><MessageIcon sx={{ fontSize: '50px', color: 'white'}} /></Button>

        //         <Button className={classes.icon}
        //         ><MenuIcon sx={{ fontSize: '50px',color: 'white' }} /></Button>

        //         <Button className={classes.icon}
        //         ><TelegramIcon sx={{ fontSize: '50px',color: 'white' }} /></Button>

        //         <Button className={classes.icon}
        //         ><PersonAddIcon sx={{ fontSize: '50px',color: 'white' }} /></Button>

        //         <Button sx={{
        //             marginTop: '273px', border: '1px solid white', width: '50px', borderRadius: '15px', marginLeft: '6px', cursor: 'pointer', color: 'white', "&:hover":
        //             {
        //                 backgroundColor: 'black'
        //             } 
        //         }}
        //         ><NotificationsActiveIcon sx={{ fontSize: '50px' }} /></Button>

        //         <Button className={classes.icon}
        //         ><SettingsIcon sx={{ fontSize: '50px',color: 'white' }} /></Button>

        //         <Button className={classes.icon}
        //         ><AccountCircleIcon sx={{ fontSize: '50px',color: 'white' }} /></Button>
        //         <Button></Button> */}
        //         <LeftMenu/>
        //     </Stack>


        //     <Stack flexDirection={'column'} sx={{ backgroundColor: '#262626', width: '370px' }}>
        //         {/* <Stack flexDirection={'row'} sx={{ backgroundColor: '#262626', height: '70px' }}>
        //             <Stack>
        //                 <Stack sx={{
        //                     fontSize: '16pt', fontWeight: 'Bold', textAlign: 'center', m: '10px', mt: '20px', color: 'white'
        //                 }}>Recent Message</Stack>
        //             </Stack>
        //             <Button><ArrowDropDownIcon sx={{ fontSize: '30px', color: 'white' }} />
        //             </Button>
        //             <Button><BorderColorIcon sx={{ fontSize: '20px', ml: '100px', color: 'white' }} />
        //             </Button>
        //         </Stack>

        //         <Stack flexDirection={'row'} sx={{ backgroundColor: 'black', m: '5px 20px', borderRadius: '8px' }}>
        //             <Button sx={{ "&:hover": { backgroundColor: '#262626' }, color: 'white', fontSize: '12pt', m: '10px', width: '200px' }}>
        //                 Chat</Button>
        //             <Button sx={{ "&:hover": { backgroundColor: '#262626' }, color: 'white', fontSize: '12pt', m: '10px', width: '200px' }}>
        //                 Group</Button>
        //         </Stack> */}
             
        //         <Stack> <Bodytext/> </Stack>
        //     </Stack>

        //     <Stack flexDirection={'column'} sx={{ backgroundColor: '#262626', width: '1100px' }}>
        //         <Message_body/>
        //     </Stack>

        //     <Stack flexDirection={'column'} sx={{ backgroundColor: 'black', width: '331px'}}>
        //         <RightMenu/>
        //     </Stack>

        // </Stack>
    )
}
export default Sidebar