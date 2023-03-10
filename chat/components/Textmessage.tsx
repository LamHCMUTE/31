import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Button, Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const Textmessage = () =>{
    return(
        <Stack flexDirection={'row'} sx={{}}>
            <TextField sx={{ cursor:'point',width:'800px',backgroundColor:'white', borderRadius:'8px', m:'5px',}}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Type something..."
            />
            <Button sx={{}}><EmojiEmotionsIcon  sx={{color:'white', fontSize:'30px',}}/></Button>
            <Button><MicIcon  sx={{color:'white', fontSize:'30px'}}/></Button>
            <Button><AttachFileIcon  sx={{color:'white', fontSize:'30px'}}/></Button>
            <Button><SendIcon  sx={{color:'white', fontSize:'30px'}}/></Button>
        </Stack>
        
        
    )
}
export default Textmessage