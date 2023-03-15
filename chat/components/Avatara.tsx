import { Avatar, Badge, Button, createStyles, Grid, makeStyles, Stack, styled, Theme } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Avatara = () =>{
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
      
    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
      }));

    return(
        <Stack flexDirection={'column'} sx={{justifyContent: "space-evenly", alignItems:'center', textAlign:'left'}}>
            <Stack flexDirection={'row'} sx={{cursor:'pointer',"&:hover":{backgroundColor: 'black'}, paddingTop:'10px',paddingLeft:'10px'}}>
                <Grid>
                    <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                        <Avatar alt="Remy Sharp" src="https://www.pngkey.com/png/detail/804-8049996_male-avatar-job.png" />
                    </StyledBadge>
                </Grid>
                <Grid>
                    <Stack sx={{color:'white',m:'20px'}}>Friday, March 10th, 2023</Stack>
                </Grid>
            </Stack>

            <Stack flexDirection={'row'} sx={{textAlign:'right',cursor:'pointer',"&:hover":{backgroundColor: 'black'}, paddingTop:'10px',paddingLeft:'10px'}}>
                <Grid>
                <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                        <Avatar alt="Remy Sharp" src="https://www.pngkey.com/png/detail/804-8049996_male-avatar-job.png" />
                    </StyledBadge>
                </Grid>
                <Grid>
                    <Stack sx={{color:'white',m:'20px'}}>Friday, March 10th, 2023</Stack>
                </Grid>
            </Stack>

            <Stack flexDirection={'row'} sx={{textAlign:'right',cursor:'pointer',"&:hover":{backgroundColor: 'black'}, paddingTop:'10px',paddingLeft:'10px'}}>
                <Grid>
                <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                        <Avatar alt="Remy Sharp" src="https://www.pngkey.com/png/detail/804-8049996_male-avatar-job.png" />
                    </StyledBadge>
                </Grid>
                <Grid>
                    <Stack sx={{color:'white',m:'20px'}}>Friday, March 10th, 2023</Stack>
                </Grid>
            </Stack>
           
        </Stack>

    )
}
export default Avatara