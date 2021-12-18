import React from 'react'
import {Avatar,Button,Grid,Paper,TextField,Box,Typography} from "@material-ui/core"
import {Link , useNavigate} from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from "react";

function Login()
{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('https://60cad4d221337e0017e431c7.mockapi.io/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data) {
            navigate('/api')

		} else {
			alert('Please check your username and password')
		}
	}


    const paperStyle={padding:20 ,height:"60vh",width:280,margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
     return(
         <Grid>
             <Paper elevation={10} style={paperStyle}>
                 <Grid align="center">
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <form onSubmit={loginUser} >
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="enter Email"  type="email" fullWidth required/>
                <TextField value={password} onChange={(e) => setPassword(e.target.value)}  label="password" placeholder=" enter password"  type="password"fullWidth required/>
                <Box sx={{ m: 2 }} />
                <Button type="submit" color="primary" variant="contained" fullWidth padding={10} margin={5} >Sign in</Button>
                </form>
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
