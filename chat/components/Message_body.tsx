import { Avatar, Box, Button, Paper, Stack } from "@mui/material"
import Textmessage from "./Textmessage"
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Chakra_Petch } from "next/font/google";
import Chat_message from "./Chat_message";
const textmessage=()=>{
    return(
        <Stack flexDirection={'column'} sx={{ backgroundColor: '#262626',height:'100%' }}>

                <Stack flexDirection={'row'} sx={{ backgroundColor: '#262626' }}>
                    <Button><Avatar alt="Remy Sharp" src="https://www.pngkey.com/png/detail/804-8049996_male-avatar-job.png" sx={{ml:'8px',height:'80%',width:'90%'}} />
                    </Button>
                    <Stack flexDirection={'column'} >
                        <Stack sx={{
                            mt: '10px', ml: '20px', fontSize: '16pt', fontWeight: 'Bold', m: '10px', color: 'white'
                        }}>Xshinla</Stack>
                        <Stack sx={{
                            fontSize: '12pt', m: '10px', color: 'white'
                        }}>Active</Stack>
                    </Stack>
                    <Button sx={{ ml: '70%' }}><LocalPhoneIcon sx={{ color: 'white', fontSize: '20px' }} /></Button>
                    <Button><VideocamIcon sx={{ color: 'white', fontSize: '20px' }} /></Button>
                    <Button><MoreVertIcon sx={{ color: 'white', fontSize: '20px' }} /></Button>
                </Stack>

                <Stack flexDirection={'column'} sx={{ backgroundColor: 'black', height: '800px',justifyContent:'space-around',spacing:'2'}}>


                    {/* <Stack flexDirection={'column'} sx={{width:'30%',mr:'490px'}}>
                        <Box sx={{display:'flex', flexWrap:'wrap'}}>
                            <Paper>
                                <Avatar alt="Remy Sharp" src="https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg" 
                        sx={{height:'50px',width:'50px'}} />
                                <Avatar alt="Remy Sharp" src="https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg" 
                        sx={{height:'50px',width:'50px'}} />
                        
                        </Paper>
                        </Box>

                        <Avatar alt="Remy Sharp" src="https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg" 
                        sx={{height:'50px',width:'50px'}} />
                    </Stack>

                    <Stack flexDirection={'column'} sx={{width:'30%',alignContent:'left'}}>
                        <Avatar alt="Remy Sharp" src="https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg" 
                        sx={{height:'50px',width:'50px'}} />
                    </Stack> */}

                    <Chat_message
                        message={"LAm"} 
                        isMe={false} date = {undefined} 
                        avatarUrl = {"https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg"}
    
                    />

                    <Chat_message
                        message={"lư"} 
                        isMe={true} date = {undefined} 
                        avatarUrl = {"https://vuongquocanh.com/wp-content/uploads/2018/05/london-eye-800x534.jpg"}
    
                    />
                </Stack>

                <Stack flexDirection={'row'} sx={{ backgroundColor: 'black', height: '60px', m: '10px 15px', borderRadius: '8px', color: 'white' }}>
                    <Textmessage />
                </Stack>

            </Stack>
    )
}
export default textmessage

// import { Avatar, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
// import * as React from 'react';
// import Image from 'next/image';

// export interface IMessageProps {
//     message: string;
//     isMe: boolean;
//     date: Date | undefined;
//     avatarUrl: string;
// }
// const itemData = [
//     {
//         img: '/static/image/background.jpg',
//         title: 'Breakfast',
//     },
//     {
//         img: '/static/image/background.jpg',
//         title: 'Breakfast',
//     },
//     {
//         img: '/static/image/background.jpg',
//         title: 'Breakfast',
//     },
// ];
// export default function Message(props: IMessageProps) {
//     const { message, isMe, date, avatarUrl } = props;
//     return (
//         <>
//             <Stack direction={isMe ? 'row-reverse' : 'row'} columnGap={1}>
//                 <Avatar alt="Avatar" src={avatarUrl} />
//                 <Stack gap={1}>
//                     <Stack alignItems={isMe ? 'flex-end' : 'normal'}>
//                         <Typography sx={{ color: 'white' }}>Ngô Tấn Trọng</Typography>
//                         <Typography sx={{ color: 'white' }}>{message}</Typography>
//                     </Stack>
//                     <ImageList
//                         cols={3}
//                         rowHeight={164}
//                         sx={{
//                             direction: isMe ? 'rtl' : 'initial',
//                             gridAutoFlow: isMe ? 'dense' : 'initial',
//                         }}
//                     >
//                         {itemData.map((item, index) => (
//                             <ImageListItem key={index}>
//                                 {/* <Image
//                                     src={
//                                         item.img +
//                                         "?w=164&h=164&fit=crop&auto=format"
//                                     }
//                                     width={164}
//                                     height={164}
//                                     alt={item.title}
//                                     loading="lazy"
//                                 /> */}
//                                 <Stack
//                                     component={'img'}
//                                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//                                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                                     alt={item.title}
//                                     loading="lazy"
//                                     sx={{
//                                         width: 164,
//                                         height: 164,
//                                         objectFit: 'cover',
//                                     }}
//                                 ></Stack>
//                             </ImageListItem>
//                         ))}
//                     </ImageList>
//                     <Stack direction={'row'} justifyContent={'space-between'}>
//                         <Typography sx={{ color: 'white' }}>
// {date?.toLocaleTimeString()}
//                             12:00
//                         </Typography>
//                         <Typography sx={{ color: 'white' }}>Seen</Typography>
//                     </Stack>
//                 </Stack>
//             </Stack>
//         </>
//     );
// }