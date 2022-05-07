 import {  useState,useEffect } from "react";
 import style from "./Signup.module.css";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Footer} from '../../footer/footer'





const theme = createTheme();

export const Signup = () => {
const [values, setValues] = useState({
  firstName: '',
  mobileno: '',
  email:'',
  password:'',
  confirmpassword: '',

})

const [error, setError] = useState({

})

const handleChange = e =>{
  const { name ,value } = e.target
  setValues({
    ...values,
    [name]:value 
  })
}

// handleSubmit = (event) => {
//   alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
//   console.log(this.state);
//   this.setState({
//       firstName: "",
//       lastName: "",
//       password: '',
//       gender: "",
//   })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    
<div style={{
  
  
}

}>
    <div style={{
  
  width:'100%',
  
}} >
     <div className={ style.topHeading}>
         <h2>NEW USER</h2>
         <h2>REGISTRATION</h2>
         </div>
        
         <hr className={ style.lineheading}></hr>

     <div className={style.textAreaDiv}>
      
      <div className={ style.textdiv}>
              <p>At Sportsjam.in, buy your favourite brand and sportsgear at great prices. Don't forget to use our welcome
                  gift vouchers (worth Rs.2000)* for more savings!

                  Register online and and enjoy the following benefits:</p>
              <ul>
                  <li>Get Discount Vouchers, Special Promotions & Offers</li><br></br>
                  <li>Checkout faster while making your purchases</li><br></br>
                  <li>View your Order History and track your Order Status</li><br></br>
                  <li>Make changes to your account information or password</li><br></br>
              </ul>

          </div>


     </div>


     </div>

     <div>

    
     <ThemeProvider theme={theme}>

      <Container component="main" className={style.boxComponents} >
        <CssBaseline />
        <Box 

    style={{
      
      height:300,
      padding: 20,
      marginTop:'-4%'
      
      
    }}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
          
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Sign up
          </Typography> */}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <label className={style.inputlablename}> First Name
               <font className={ style.star}>*</font>
             </label>
              <Grid  item xs={9} className={style.confrmpass} >
                <input className={style.TextFieldarea}
                  autoComplete="given-name"
                  required
                  fullWidth
                  name="firstName"
                  id="firstName"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                />
              </Grid>
              
              <label className={style.inputlablemobile}>Mobile No.
               <font className={ style.star}>*</font>
             </label> 
              <Grid item xs={9} className={style.confrmpass} >
                <input
                className={style.TextFieldarea}
                  required
                  fullWidth
                  id="mobileno"
                  name="mobileno"
                  autoComplete="family-name"
                  value={values.mobileno}
                  onChange={handleChange}
                />
              </Grid>

              <label className={style.inputlableemail}>Email
               <font className={ style.star}>*</font>
             </label> 
              <Grid className={style.confrmpass} item xs={9} sx={5}>
                <input
                className={style.TextFieldarea}
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}

                />
              </Grid>

              <label className={style.inputlablepass}>Password
               <font className={ style.star}>*</font>
             </label> 
              <Grid className={style.confrmpass}item xs={9}>
                <input
                className={style.TextFieldarea}
                  required
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  value={values.password}
                  onChange={handleChange}
                />
              </Grid>
               
              <label className={style.inputlablepassc}>Confirm <br></br>
              password
               <font className={ style.star}>*</font>
             </label> 
              <Grid className={style.confrmpass} item xs={9} sx={{width:10,}}>
                <input
                className={style.TextFieldarea}
                  required
                  fullWidth
                  
                  name="confirmpassword"
                  type="password"
                  id="confirmpassword"
                  autoComplete="new-password"
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
              </Grid>

              
              
             
            </Grid>
            <Button className={style.submitbtn}
              type="submit"
              fullWidth
              // variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <Footer></Footer>

       
    </div>
    </div>
  );
}