import { Grid, Paper ,Avatar, Typography,TextField,Box,Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import React from 'react'
import {Link , useNavigate} from "react-router-dom";
import { useState } from "react";



function Signup()
{
    // const history = useHistory()
    // const location =useLocation()
    const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('https://60cad4d221337e0017e431c7.mockapi.io/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
            if (data) {
            navigate('/')
		}

    }

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
                <form  onSubmit={registerUser}>
                <TextField value={name} onChange={(e) => setName(e.target.value)} label="username" placeholder=" enter username" fullWidth required/>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" placeholder=" enter Email"  type="email"fullWidth required/>
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="password" placeholder=" enter password"  type="password"fullWidth required/>
                <Box sx={{ m: 2 }} />
                <Button type="submit" color="primary" variant="contained" fullWidth padding={10} margin={5} >Sign up</Button>
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