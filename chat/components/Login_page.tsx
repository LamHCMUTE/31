import { Button, Grid, Paper, Stack, styled, TextField } from "@mui/material"

const Login = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Stack  sx={{  width: '100%',alignItems: 'center' }}>
            <Stack sx={{  width: '20%',mt:'15%' }}>
                <Grid container spacing={8} columns={1}>

                    <Grid item xs={8} sx={{}}>
                        <Item>
                            <TextField id="filled-basic" label="Username" variant="filled" sx={{ width: '350px' }} />
                        </Item>
                    </Grid>

                    <Grid item xs={8}>
                        <Item>
                            <TextField id="filled-basic" label="Password" variant="filled" sx={{ width: '350px' }} />
                        </Item>
                    </Grid>

                    <Grid item xs={8} >
                        <Item>
                            <Button sx={{ backgroundColor: 'black', width: '350px' }}>Login</Button>
                        </Item>
                    </Grid>

                </Grid>
            </Stack>
        </Stack>


    )
}
export default Login