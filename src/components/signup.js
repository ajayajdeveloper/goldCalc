import { Grid, Paper ,Avatar, Typography,TextField,Box,Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import React from 'react'
import {Link} from "react-router-dom";



function Signup()
{
    const paperStyle={padding:"20px 30px" ,height:"60vh",width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
    const headerStyle={margin:4}

   return(
       <Grid>
           <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                 <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon/></Avatar>
                 <h2 style={headerStyle}>Sign up</h2>
                 <Typography variant="caption">Fill this form to create a Account</Typography>
                </Grid>
                <form>
                <TextField label="username" placeholder=" enter username" fullWidth required/>
                <TextField label="Email" placeholder=" enter Email"  type="email"fullWidth required/>
                <TextField label="password" placeholder=" enter password"  type="password"fullWidth required/>
                <Box sx={{ m: 2 }} />
                <Button type="submit" color="primary" variant="contained" fullWidth padding={10} margin={5} >Sign in</Button>
                </form>
                <Box sx={{ m: 2 }} />
                <Grid>
                <Typography > Already have an account ?
                     <Link to="/">sign in</Link>
                </Typography>
                </Grid>
          </Paper>
       </Grid>
   )
} 

export default Signup