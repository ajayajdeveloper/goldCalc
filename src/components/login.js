import React from 'react'
import {Avatar,Button,Grid,Paper,TextField,Box,Typography} from "@material-ui/core"
import {Link} from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


function Login()
{
    
    const paperStyle={padding:20 ,height:"60vh",width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
     return(
         <Grid>
             <Paper elevation={10} style={paperStyle}>
                 <Grid align="center">
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <TextField label="username" placeholder=" enter username" fullWidth required/>
                <TextField label="password" placeholder=" enter password"  type="password"fullWidth required/>
                <Box sx={{ m: 2 }} />
                <Button type="submit" color="primary" variant="contained" fullWidth padding={10} margin={5} >Sign in</Button>
                <Box sx={{ m: 2 }} />
                <Grid>
                <Typography > Do you have an account ?
                     <Link to="/signup">sign up</Link>
                </Typography>
                </Grid>
             </Paper>
         </Grid>
     );
}

export default Login
