import React from 'react'
import { useState ,useEffect} from "react";
// import {Card,CardHeader}from '@material-ui/core'
import { Grid, Paper , Typography, TextField ,Box , Button,FormControl,MenuItem,Select,InputLabel}from '@material-ui/core'

export default function Api() {

    const [price,setPrice] = useState([])
    
    function loadPrice()
    {
        fetch("https://60cad4d221337e0017e431c7.mockapi.io/price",
        {
            method:"GET"     
        })
        .then((data) => data.json())
        .then((result) => setPrice(result));
      
    }
    // useEffect(() => {
    //     loadPrice();
    //   }, []);
    

    return (
        <div>
          {/* {price.map((data) => (
          <GoldRate   key={data.id} {...data} />
          
        ))}
  */}
       {price.map((data) => (
          <GoldViewr  key={data.id} {... data}   />
          
        ))} 
        
        
        </div>
        
    )
}


// function GoldRate({ state ,rate }) {
//     return (
//       <Card style={{ width: "400px" }}>
//         <CardHeader
//           title={state}
//           subheader={rate}
//         />
//       </Card>
//     );
//   }

// function GoldRate({ state ,rate }) {
    
        
//     const handleChange = (event) => {
//         setPrice(event.target.value);
//       };
//       const paperStyle={padding:"20px 30px" ,height:"60vh",width:280,margin:"20px auto"}
//       const headerStyle={margin:4}
  
//     return (
//         <Grid>
//         <Paper elevation={10} style={paperStyle}>
//             <Grid align="center">
//             <h2 style={headerStyle}>Gold Calculator</h2>
//             <Typography variant="caption">Find the gold rate by enter below data </Typography>
//             <Box sx={{ m: 2 }} />
//             </Grid>
//             <FormControl fullWidth>
//               <InputLabel>Price</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={price}
//                     label="price"
//                     // onChange={handleChange}
//                 >
//                        <div >
//                        <GoldViwer   key={data.id} {...data} />
//                         <MenuItem value={10}>{state}</MenuItem>
//                         <MenuItem value={20}>mumbai</MenuItem>
//                         <MenuItem value={30}>kerala</MenuItem>
                       
//                         </div>
//                 </Select>
                
//                 <TextField label="Grams" placeholder=" enter Grams " Inputtype="number" fullWidth required/>
//                 <Box sx={{ m: 2 }} />
//                 <Button type="submit" color="primary" variant="contained" fullWidth padding={10} margin={5} >Calculate</Button>

//       </FormControl> 
//         </Paper>
//         </Grid>
      
//     );
//   }



  function GoldViewr({ state ,rate,id }) {
    const [price,setPrice] = useState([])

    const handleChange = (event) => {
        setPrice(event.target.value);
      };
      const paperStyle={padding:"20px 30px" ,height:"60vh",width:280,margin:"20px auto"}
      const headerStyle={margin:4}
  
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
            <h2 style={headerStyle}>Gold Calculator</h2>
            <Typography variant="caption">Find the gold rate by enter below data </Typography>
            <Box sx={{ m: 2 }} />
            </Grid>
            <FormControl fullWidth>
              <InputLabel>state</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price }
                    label="state"
                    onChange={handleChange}
                >
                       <div >
                        <MenuItem value={10}>{state}</MenuItem>
                        {/* <MenuItem value={20}>{prices.state}</MenuItem> */}
                        {/* <MenuItem value={30}>{state}</MenuItem> */}
                       
                        </div>
                </Select>
                
                <TextField label="Grams" placeholder=" enter Grams " Inputtype="number" fullWidth required/>
                <Box sx={{ m: 2 }} />
                <Button type="submit" color="primary" variant="contained" fullWidth padding={10} margin={5} >Calculate</Button>

      </FormControl> 
        </Paper>
        </Grid>
     
    );
  }




  