import { Button, Grid, Stack } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Avatara = () =>{
    return(
        <Stack flexDirection={'column'} sx={{justifyContent: "space-evenly", alignItems:'center'}}>
           <Stack flexDirection={'row'} sx={{position:'fixed',justifyContent: "space-between"}}>
                <Button><AccountCircleRoundedIcon sx={{fontSize:'50px'}}/></Button>
                <Stack>
                    <div>
                    lammm /nlamaaaaaaa
                    </div>
                </Stack>
           </Stack>
          

           <Stack flexDirection={'row'} sx={{position:'fixed',justifyContent: "space-between", mt:'50px'}}>
                <Button><AccountCircleRoundedIcon sx={{fontSize:'50px'}}/></Button>
                <Stack>
                    <div>
                    lammm /nlamaaaaaaa
                    </div>
                </Stack>
           </Stack>
           
           <Stack flexDirection={'row'} sx={{position:'fixed',justifyContent: "space-between"}}>
                <Button><AccountCircleRoundedIcon sx={{fontSize:'50px'}}/></Button>
                <Stack>
                    <div>
                    lammm /nlamaaaaaaa
                    </div>
                </Stack>
           </Stack>
        </Stack>

    )
}
export default Avatara