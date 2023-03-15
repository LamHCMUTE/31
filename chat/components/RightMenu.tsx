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
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
 
const Rightmenu = () =>{
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);

      };
    return(
        <Stack flexDirection={'column'} sx={{backgroundColor:'#262626',overflowY: 'auto',
        overflowX: 'hidden'}} >
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

                <Stack flexDirection={'row'} sx={{display:'flex',justifyContent:'space-around'}}>           
                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxVef4dTd1U-iuj9AWMwleA7Ifn8Q-GJOVu93OWv2F5g8nCQ6AsliQdgTJJRjSnjkv6g&usqp=CAU" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Linh</Stack>
                    </Stack> 

                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxVef4dTd1U-iuj9AWMwleA7Ifn8Q-GJOVu93OWv2F5g8nCQ6AsliQdgTJJRjSnjkv6g&usqp=CAU" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Lam</Stack>
                    </Stack> 

                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                        <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxVef4dTd1U-iuj9AWMwleA7Ifn8Q-GJOVu93OWv2F5g8nCQ6AsliQdgTJJRjSnjkv6g&usqp=CAU" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Trong</Stack>
                    </Stack> 

                    <Stack flexDirection={'column'} sx={{ml:'10px'}}> 
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxVef4dTd1U-iuj9AWMwleA7Ifn8Q-GJOVu93OWv2F5g8nCQ6AsliQdgTJJRjSnjkv6g&usqp=CAU" sx={{ml:'8px'}} />
                        <Stack sx={{
                            ml: '10px', fontSize: '12pt', fontWeight: 'Bold', color: 'white'
                        }}>Phan</Stack>
                    </Stack> 
    
                </Stack>
            </Stack>
            

            <Stack flexDirection={'column'} sx={{backgroundColor:'#262626', paddingBottom:'30px',mt:'10px'}}>
                <Stack sx={{fontSize: '16pt', m: '5px 15px', mb:'0px', color: 'white',fontWeight:'bold'}}>Profile</Stack>
                <Avatar alt="Remy Sharp" src="https://www.pngkey.com/png/detail/804-8049996_male-avatar-job.png" sx={{ml:'138px',width: 56, height: 56}} />
                <Stack sx={{fontSize: '13pt', m: '0px 140px', mb:'0px', color: 'white'}}>Xshinla</Stack>
                <Stack sx={{fontSize: '13pt', m: '0px 128px', mb:'0px', color: 'white'}}>@xuanlam</Stack>
                <Button sx={{color:'white'}}>----------------------------------------------------------</Button>
                <Stack flexDirection={'row'} sx={{}}>
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
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>

            </Stack>

            <Stack flexDirection={'column'} sx={{backgroundColor:'#262626', paddingBottom:'30px',mt:'10px'}}>
                <Stack sx={{mt: '10px', ml: '20px', fontSize: '14pt', m: '10px', color: 'white'}}>Other Files</Stack>
                <Accordion sx={{backgroundColor:'#262626', color:'white'}} expanded={expanded === 'panel1' } onChange={handleChange('panel1')}>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                        <DocumentScannerIcon />
                    </Typography>
                    <Typography sx={{  }}>Documents</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <Stack>Documentssssssaaaaaaaaaaaaa aaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaa \naaaaaaaa</Stack>
               
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{backgroundColor:'#262626', color:'white'}} expanded={expanded === 'panel2' } onChange={handleChange('panel2')}>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
                        aria-controls="panel1bh-content"
                        id="panel2bh-header"
                        >
                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                        <YouTubeIcon />
                    </Typography>
                    <Typography sx={{  }}>Channels</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Documentssssss
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{backgroundColor:'#262626', color:'white'}} expanded={expanded === 'panel3' } onChange={handleChange('panel3')}>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
                        aria-controls="panel1bh-content"
                        id="panel3bh-header"
                        >
                    <Typography sx={{ width: '15%', flexShrink: 0 }}>
                        <GroupIcon />
                    </Typography>
                    <Typography sx={{  }}>Groups</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Documentssssss
                    </Typography>
                    </AccordionDetails>
                </Accordion>
               
            </Stack>
    </Stack>
    )
}
export default Rightmenu