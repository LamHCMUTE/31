import { Avatar, Button, Stack } from "@mui/material"
import Textmessage from "./Textmessage"
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const textmessage=()=>{
    return(
        <Stack flexDirection={'column'} sx={{ backgroundColor: '#262626' }}>

                <Stack flexDirection={'row'} sx={{ backgroundColor: '#262626' }}>
                    <Button><Avatar alt="Remy Sharp" src="https://www.pngkey.com/png/detail/804-8049996_male-avatar-job.png" sx={{ml:'8px'}} />
                    </Button>
                    <Stack flexDirection={'column'} >
                        <Stack sx={{
                            mt: '10px', ml: '20px', fontSize: '16pt', fontWeight: 'Bold', m: '10px', color: 'white'
                        }}>Xshinla</Stack>
                        <Stack sx={{
                            fontSize: '12pt', m: '10px', color: 'white'
                        }}>Active</Stack>
                    </Stack>
                    <Button sx={{ ml: '730px' }}><LocalPhoneIcon sx={{ color: 'white', fontSize: '30px' }} /></Button>
                    <Button><VideocamIcon sx={{ color: 'white', fontSize: '30px' }} /></Button>
                    <Button><MoreVertIcon sx={{ color: 'white', fontSize: '30px' }} /></Button>
                </Stack>

                <Stack flexDirection={'column'} sx={{ backgroundColor: 'black', height: '800px' }}></Stack>

                <Stack flexDirection={'row'} sx={{ backgroundColor: 'black', height: '60px', m: '10px 15px', borderRadius: '8px', color: 'white' }}>
                    <Textmessage />
                </Stack>

            </Stack>
    )
}
export default textmessage