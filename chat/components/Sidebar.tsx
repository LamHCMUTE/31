import { Message, Opacity } from "@mui/icons-material"
import { Avatar, Button, Stack } from "@mui/material"
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
import { Theme } from "@mui/system/createTheme/createTheme";
import {createStyles, makeStyles,} from "@mui/styles";
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
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon_top: {
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
            marginTop:'10px',marginLeft:'8px', border:'1px solid white', width:'50px', borderRadius:'15px', cursor:'pointer',color:'white',"&:hover":{backgroundColor: 'black'
        }}
        }
    
    )
)
const Sidebar = () =>{
    const classes = useStyles()
    return (
        <Stack flexDirection={'row'} sx={{position:'fixed',justifyContent: "space-between"}} >

            <Stack flexDirection={'column'} sx={{backgroundColor:'#262626',width:'80px', marginLeft:0}}>
                
                <Button sx={{marginTop:'180px',border:'1px solid white', width:'50px', borderRadius:'15px',marginLeft:'8px',cursor:'pointer', "&:hover":{backgroundColor: 'black'
                }}}
                ><MessageIcon sx={{fontSize:'50px',color:'white'}}/></Button>

                <Button className={classes.icon_top}
                ><MenuIcon sx={{fontSize:'50px'}}/></Button>

                <Button className={classes.icon_top}
                ><TelegramIcon sx={{fontSize:'50px'}}/></Button>
                
                <Button className={classes.icon_top}
                ><PersonAddIcon sx={{fontSize:'50px'}}/></Button>
                
                <Button sx={{marginTop:'250px',border:'1px solid white', width:'50px', borderRadius:'15px',marginLeft:'8px',cursor:'pointer', color:'white',"&:hover":
                {backgroundColor: 'black'
                }}}
                ><NotificationsActiveIcon sx={{fontSize:'50px'}}/></Button>

                <Button className={classes.icon_top}
                ><SettingsIcon sx={{fontSize:'50px'}}/></Button>

                <Button className={classes.icon_top}
                ><AccountCircleIcon sx={{fontSize:'50px'}}/></Button>
                <Button></Button>
            </Stack>


            <Stack flexDirection={'column'} sx={{backgroundColor: '#262626', width:'370px'}}>
                <Stack flexDirection={'row'} sx={{backgroundColor:'#262626',height:'70px'}}>
                    <Stack>
                        <Stack sx={{ fontSize:'16pt', fontWeight:'Bold',textAlign:'center',m:'10px', mt:'20px'
                        }}>Recent Message</Stack>
                    </Stack>
                    <Button><ArrowDropDownIcon sx={{color:'black', fontSize:'30px'}}/>
                    </Button>
                    <Button><BorderColorIcon sx={{color:'black', fontSize:'20px',ml:'100px'}}/>
                    </Button>
                </Stack>
                
                <Stack flexDirection={'row'} sx={{backgroundColor:'black',m:'5px 20px',borderRadius:'8px'}}>
                    <Button sx={{"&:hover":{backgroundColor: '#262626'}, color:'white',fontSize:'12pt',m:'10px',width:'200px' }}>
                        Chat</Button>
                    <Button sx={{"&:hover":{backgroundColor: '#262626'}, color:'white',fontSize:'12pt',m:'10px',width:'200px' }}>
                        Group</Button>
                </Stack>
                
                <Stack> <Avatara /> </Stack>
            </Stack>

            <Stack flexDirection={'column'} sx={{backgroundColor: 'blue', width:'1100px'}}>
                <Stack flexDirection={'row'} sx={{backgroundColor:'#262626'}}>
                    <Button><AccountCircleOutlinedIcon sx={{color:'white', fontSize:'70px'}}/>
                    </Button>

                    <Stack flexDirection={'column'} >
                        <Stack sx={{mt: '10px', ml: '20px',fontSize:'16pt', fontWeight:'Bold',m:'10px', color:'white'
                        }}>Xshinla</Stack>
                        <Stack sx={{ ml: '16px',fontSize:'16pt',m:'10px', color:'white'
                        }}>Active</Stack>
                    </Stack>

                    <Button><MenuOpenIcon sx={{color:'white', fontSize:'30px',ml:'170px'}}/>
                    </Button>
                </Stack>
            </Stack>

            <Stack flexDirection={'column'} sx={{backgroundColor: '#262626', width:'310px'}}>
                <Stack flexDirection={'row'} sx={{backgroundColor:'green'}}>
                    <Stack>
                        <Stack sx={{mt: '10px', ml: '20px',fontSize:'16pt', fontWeight:'Bold',m:'10px', color:'white'
                        }}>Activity</Stack>
                    </Stack>
                    <Button><MenuOpenIcon sx={{color:'white', fontSize:'30px',ml:'170px'}}/>
                    </Button>
                </Stack>

            </Stack>
        </Stack>
    )
}
export default Sidebar