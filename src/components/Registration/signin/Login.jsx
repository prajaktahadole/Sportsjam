// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import style from "./login.module.css";
// // import { Googleauth } from './Googleauth';

// import {useNavigate} from "react-router-dom"
// import { height } from '@mui/system';



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Urbanladder
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export const Login = () => {
//   const navigate = useNavigate()
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     var email = data.get('email')
//     var password = data.get('password')
    
//   .then((userCredential) => {
//     // Signed in 
    
//     const user = userCredential.user;
//     alert('user succesfully signed in')
//     console.log(userCredential)
  

//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//   });
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <div className='logindiv'>
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '50vh' }}>
//         <CssBaseline />
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.ulcdn.net/media/subscription_popup/Colour-Crush-Sale-End-Pop-up.jpg?1648194184)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
//         <Grid className={style.loginbox} item xs={0} sm={0} md={5} component={Paper} elevation={0} square>
//           <Box className={style.cardDiv}
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               border:'4px solid gray',
              
//             }}
//           >

// <div className='dev1'>
//   <h3 className='dev5'>Login</h3></div>
           
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//             <Grid className={style.passgrid}>
//               <lable className = {style.email}>E-mail id</lable>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
                
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               </Grid>
//               <Grid className={style.passgrid}>
//               <lable className={style.password}>Password</lable>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
                
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//              </Grid>
             
//              <Grid container>
                
//               <Grid item xs>
//                   <Link href="http://localhost:3000/signup" variant="body2">
//                     {"New usert? register"}
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="http://localhost:3000/forgotpass" variant="body2">
//                     Forgot password?
//                   </Link>
                  
//                 </Grid>
//               </Grid>

//               <Button
//               className={style.subitbtn}
//                 type="submit"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
              
//               {/* <Googleauth/> */}
//               <Copyright sx={{ mt: 5 }} />
              
              
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { Modal, Button, Form } from "react-bootstrap";


// export const Login =() => {
//   const [show, setShow] = useState(false);
//  useEffect(()=>{
//   handleShow()

//  },[])

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
 
//   return (
//     <>
      

//       <Modal show={show} onHide={handleClose}>
        
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>E-mail id</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>password</Form.Label>
//               <Form.Control type="password" rows={3} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Login
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }



import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import { useModal } from 'react-hooks-use-modal';

export const Login = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });
  return (
    <div>
      <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>
      <button onClick={open}>OPEN</button>
      <Modal>
        <div>
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal>
    </div>
  );
};

