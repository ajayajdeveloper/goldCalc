import React from 'react'
import { useState} from "react";
import { Grid, Paper , Typography, TextField ,Box , Button,FormControl,MenuItem,Select,InputLabel} from '@material-ui/core'



export default function Price() {

    const paperStyle={padding:"20px 30px" ,height:"60vh",width:280,margin:"20px auto"}
    const headerStyle={margin:4}

    const [price,setPrice] = useState([])

    const handleChange = (event) => {
        setPrice(event.target.value);
      };

    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <h2 style={headerStyle}>Gold Calculator</h2>
            <Typography variant="caption">Find the gold rate by enter below data </Typography>
            <Box sx={{ m: 2 }} />
            </Grid>
            <FormControl fullWidth>
              <InputLabel>Price</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="price"
                    onChange={handleChange}
                >
                       <div >
                        <MenuItem value={10}>chennai</MenuItem>
                        <MenuItem value={20}>mumbai</MenuItem>
                        <MenuItem value={30}>kerala</MenuItem>
                       
                        </div>
                </Select>
                
                <TextField label="Grams" placeholder=" enter Grams " Inputtype="number" fullWidth required/>
                <Box sx={{ m: 2 }} />
                <Button type="submit" color="primary" variant="contained" fullWidth padding={10} margin={5} >Calculate</Button>

      </FormControl> 
        </Paper>
        </Grid>
    )
}



