import { Box, Grid, Paper, Stack } from "@mui/material"
import { styled } from '@mui/material/styles';

const sidebar =() =>{
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        
            // <Stack flexDirection={'row'} sx={{width:'80%', height:'800px',border:'3px solid red',m:'0 auto'}}>
            //     <Stack flexDirection={'column'} sx={{width:'70%',border:'3px solid red',backgroundColor:'green'}}>
                    
            //     </Stack>
            //     <Stack flexDirection={'column'} sx={{width:'30%',border:'3px solid red',backgroundColor:'gray'}}>
                    
            //     </Stack>
            // </Stack>

            
            <Grid container spacing={4}>
                <Grid item xs={8}>
                <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=8</Item>
                </Grid>
                <Grid item xs={8}>
                <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                <Item>xs=8</Item>
                </Grid>
          </Grid>
       
    )
}
export default sidebar