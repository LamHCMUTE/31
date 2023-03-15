
import Stack from "@mui/material/Stack/Stack"
import React from "react";
import Avatara from "./Avatara"
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, AvatarGroup, Box, Button, Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const body = () =>{
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return(
        <>
            <Stack flexDirection={'row'} sx={{ backgroundColor: '#262626', height: '70px' }}>
                <Stack>
                    <Stack sx={{
                        fontSize: '16pt', fontWeight: 'Bold', textAlign: 'center', m: '10px', mt: '20px', color: 'white'
                    }}>Recent Message</Stack>
                </Stack>
                <Button><ArrowDropDownIcon sx={{ fontSize: '30px', color: 'white' }} />
                </Button>
                <Button><BorderColorIcon sx={{ fontSize: '20px', ml: '100px', color: 'white' }} />
                </Button>
            </Stack>

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{backgroundColor:"black", m:'13px 45px',borderRadius:'10px', padding:'2px 50px'}} >
                            <Tab label="Chat" value="1" sx={{color:"white",borderRadius: '5px',m:"3px 0px","&:hover": { backgroundColor: '#262626'}}}/>
                            <Tab label="Group" value="2" sx={{color:"white",borderRadius: '5px',m:"3px 0px","&:hover": { backgroundColor: '#262626'}}}/>              
                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <Stack><Avatara /></Stack>
                        </TabPanel >

                    <TabPanel value="2" sx={{}} > 

                        <AvatarGroup total={10} sx={{mt:'15px', "&:hover":{backgroundColor: 'black', cursor:'pointer'}, width:'346px', height:'70px', paddingRight:'130px',paddingTop:'10px'}}>
                            <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/worried-man-avata-avatar-worried-man-vector-illustration-107469775.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Agnes Walker" src="https://thumbs.dreamstime.com/b/worried-man-avata-avatar-worried-man-vector-illustration-107469775.jpg" />
                            <Avatar alt="Trevor Henderson" src="https://thumbs.dreamstime.com/b/worried-man-avata-avatar-worried-man-vector-illustration-107469775.jpg" />
                        </AvatarGroup>

                        <AvatarGroup total={10} sx={{mt:'15px', "&:hover":{backgroundColor: 'black', cursor:'pointer'}, width:'346px', height:'70px', paddingRight:'130px',paddingTop:'10px'}}>
                            <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/worried-man-avata-avatar-worried-man-vector-illustration-107469775.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Agnes Walker" src="https://thumbs.dreamstime.com/b/worried-man-avata-avatar-worried-man-vector-illustration-107469775.jpg" />
                            <Avatar alt="Trevor Henderson" src="https://thumbs.dreamstime.com/b/worried-man-avata-avatar-worried-man-vector-illustration-107469775.jpg" />
                        </AvatarGroup>
                    </TabPanel>
                  
                </TabContext>
            </Box>
            {/* <Stack><Avatara /></Stack> */}
        </>
    )
}
export default body