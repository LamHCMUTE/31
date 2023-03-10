import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Divider, Grid, ImageList, ImageListItem, Stack, Typography } from "@mui/material"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Image from 'next/image';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupIcon from '@mui/icons-material/Group';
import { Key } from "react";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
 
  const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
    ];

const RightMenu = () =>{
    return(
        <Stack flexDirection={'column'} sx={{}}>
            <Stack flexDirection={'column'} sx={{backgroundColor:'#262626', paddingBottom:'20px'}}>
                <Stack flexDirection={'row'} sx={{mt:'30px'}}>
                    <Stack>
                        <Stack sx={{
                                    mt: '10px', ml: '20px', fontSize: '16pt', m: '10px', color: 'white'
                                }}>Activity</Stack>
                    </Stack>
                        <Button><MenuOpenIcon sx={{ color: 'white', fontSize: '30px', ml: '170px' }} /></Button>
                </Stack>

                <Stack flexDirection={'row'} sx={{ml:'10px',mt:'10px',mb:'10px'}}>
                    <Stack>
                        <Stack sx={{fontSize: '13pt', m: '5px 15px', mb:'0px', color: 'white',fontWeight:'bold'}}>Stories</Stack>
                    </Stack>                
                </Stack>

                <Stack flexDirection={'row'} sx={{display:'flex'}}>           
                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Linh</Stack>
                    </Stack> 

                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Lam</Stack>
                    </Stack> 

                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Trong</Stack>
                    </Stack> 

                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Phan</Stack>
                    </Stack> 

                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Hieu</Stack>
                    </Stack> 
                </Stack>
            </Stack>
            

            <Stack flexDirection={'column'} sx={{backgroundColor:'#262626', paddingBottom:'30px',mt:'10px'}}>
                <Stack sx={{fontSize: '16pt', m: '5px 15px', mb:'0px', color: 'white',fontWeight:'bold'}}>Profile</Stack>
                <Button><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '100px' }} /></Button>
                <Stack sx={{fontSize: '13pt', m: '0px 140px', mb:'0px', color: 'white'}}>Xshinla</Stack>
                <Stack sx={{fontSize: '13pt', m: '0px 128px', mb:'0px', color: 'white'}}>@xuanlam</Stack>
                <Button sx={{color:'white'}}>-------------------------------------------------------------</Button>
                <Stack flexDirection={'row'} sx={{}}>
                    {/* <Stack sx={{fontSize: '12pt', ml:'15px',mt:'5px', mb:'0px', color: 'white', mr:'210px'}}>Media</Stack>
                    <Button sx={{width:'5px'}}><NavigateNextIcon sx={{ color: 'white', fontSize: '20px',ml:'2'}} /></Button> */}

                    <Accordion sx={{backgroundColor:'#262626'}}>
                        <AccordionSummary
                        expandIcon={<NavigateNextIcon sx={{color:'white'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography sx={{color:'white',backgroundColor:'transparent'}}>Media</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography sx={{backgroundColor:'red',width:'300px',ml:'0px'}}>
                            <ImageList
                                sx={{ width: 300, height: 150 }}
                                variant="quilted"
                                cols={4}
                                rowHeight={121}
                                >
                                                            
                                                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        

                        {/* const itemData = [
                        {
                            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                            title: 'Breakfast',
                            rows: 2,
                            cols: 2,
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                            title: 'Burger',
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                            title: 'Camera',
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                            title: 'Coffee',
                            cols: 2,
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                            title: 'Hats',
                            cols: 2,
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                            title: 'Honey',
                            author: '@arwinneil',
                            rows: 2,
                            cols: 2,
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                            title: 'Basketball',
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                            title: 'Fern',
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                            title: 'Mushrooms',
                            rows: 2,
                            cols: 2,
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                            title: 'Tomato basil',
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                            title: 'Sea star',
                        },
                        {
                            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                            title: 'Bike',
                            cols: 2,
                        },
                        ]; */}
                            {/* <Grid sx={{}}>
                                <Grid sx={{m:'2px 2px',ml:'1px', justifyContent: 'space-between',display:'flex'}}>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                </Grid>
                                <Grid sx={{m:'2px 2px', justifyContent: 'space-between',display:'flex'}}>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} /></Button>
                                </Grid>
                                <Grid sx={{m:'2px 2px', display:'flex'}}>
                                    <Button sx={{border:'2px solid white'}}><AccountCircleOutlinedIcon sx={{ color: 'white', fontSize: '50px',width:'300px' }} /></Button>
                                </Grid>
                            </Grid> */}
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>

            </Stack>

            <Stack flexDirection={'column'} sx={{backgroundColor:'#262626', paddingBottom:'30px',mt:'10px'}}>
                <Stack sx={{fontSize: '16pt', ml:'15px',mt:'5px', mb:'0px', color: 'white', mr:'210px'}}>Other Files</Stack>
                
                <Stack flexDirection={'row'} sx={{backgroundColor:'#262626', paddingBottom:'30px',mt:'10px'}}>
          
                        <Button><DocumentScannerIcon sx={{ color: 'white', fontSize: '20px' }} /></Button>
                        <Stack sx={{fontSize: '14pt', ml:'15px',mt:'5px', mb:'0px', color: 'white', mr:'20px'}}>Documents</Stack>
                        <Button><NavigateNextIcon sx={{ color: 'white', fontSize: '20px', ml:'110px' }} /></Button>
                </Stack>

                <Stack flexDirection={'row'} sx={{backgroundColor:'#262626', paddingBottom:'30px',mt:'10px'}}>
                    
                    <Button><YouTubeIcon sx={{ color: 'white', fontSize: '20px' }} /></Button>
                    <Stack sx={{fontSize: '14pt', ml:'15px',mt:'5px', mb:'0px', color: 'white', mr:'20px'}}>Channels</Stack>
                    <Button><NavigateNextIcon sx={{ color: 'white', fontSize: '20px', ml:'125px' }} /></Button>
                </Stack>

                <Stack flexDirection={'row'} sx={{backgroundColor:'#262626', paddingBottom:'30px',mt:'10px'}}>
                    <Button><GroupIcon sx={{ color: 'white', fontSize: '20px' }} /></Button>
                    <Stack sx={{fontSize: '14pt', ml:'15px',mt:'5px', mb:'0px', color: 'white', mr:'20px'}}>Groups</Stack>
                    <Button><NavigateNextIcon sx={{ color: 'white', fontSize: '20px', ml:'140px' }} /></Button>
                </Stack>
            </Stack>
        </Stack>
        
        
        
    )
}
export default RightMenu