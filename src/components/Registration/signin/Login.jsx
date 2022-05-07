import { useEffect } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from "./login.module.css";
import ClearIcon from '@mui/icons-material/Clear';
import {useNavigate} from "react-router-dom"


import  { useState } from "react";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Sportjam
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();




export const Login = () => {

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var email = data.get('email')
    var password = data.get('password')
    
  .then((userCredential) => {
    // Signed in 
    
    const user = userCredential.user;
    alert('user succesfully signed in')
    console.log(userCredential)
  

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
    navigate('/')
  }

  useEffect(()=>{
    toggleModal()
    
  },[])

  return (
    <>
      {/* <button onClick={toggleModal} className={style.btn-modal}>
        Open
      </button> */}

      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.modal_content}>
            <button className={style.close_modal} onClick={toggleModal}>
              <span style={{marginBottom: "10px"}}>Close |</span><span><ClearIcon style={{fontSize:"15px", }}/></span>
             
            </button>

          <div className={style.logindiv}>
            <ThemeProvider theme={theme}>
              <Grid container component="main" sx={{  }}>
                <CssBaseline />
            
                <Grid className={style.loginbox} item xs={0} sm={0} md={5} component={Paper} elevation={0} square>
                  <Box className={style.cardDiv}
                    sx={{
                      my: 8,
                      mx: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                     
                      
                    }}
                  >

        <div className={style.dev1}>
          </div>
                  
                    <Box style={{width:'90%',}} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    
                    <h3 className={style.loginhead}>Login</h3>
                    <Grid className={style.passgrid}>
                      <lable className = {style.email}>E-mail id </lable>
                      <input className={style.inputfield}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      
                      </Grid>
                      <Grid className={style.passgrid}>
                      <lable className={style.password}>Password </lable>
                      <input className={style.inputfield}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                     
                    </Grid>
                    
                    <Grid container>
                        
                      <Grid item xs>
                          <Link href="http://localhost:3000/signup" variant="body2">
                            {"New usert? register"}
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="http://localhost:3000/forgotpass" variant="body2">
                            Forgot password?
                          </Link>
                          
                        </Grid>
                      </Grid>
                        
                     
                      <Button
                      className={style.subitbtn}
                        type="submit"
                        sx={{ mt: 5, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      

                       <Grid style={{
                         
                       }}>
                        <Button className={style.loginwithfacebookbtn} >login with facebook</Button>
                        <Button className={style.loginwithgooglebtn} >login with google </Button>
                      </Grid>         

                      {/*login-with-facebook-btn <Googleauth/> */}
                      <Copyright sx={{ mt: 1 }} />
                      
                      
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </ThemeProvider>
            </div>

          </div>
        </div>
      )}
     
    </>
  );
}


