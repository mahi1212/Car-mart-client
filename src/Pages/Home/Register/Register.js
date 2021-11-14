import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import pic from '../../../images/login.jpg'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {user, registerUser, isLoading, authError} = useAuth()

    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value

        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleRegisterSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert("Password did not matched")
            return
        }
        registerUser(loginData.name, loginData.email, loginData.password, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height:'100vh' }} >
                    <Typography variant="h5" gutterBottom sx={{ color: 'text.secondary' }}>Register</Typography>
                    
                    { !isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField id="standard-basic" sx={{ width: '100%', mt: 2 }}
                            label="Your Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField id="standard-basic" sx={{ width: '100%'}}
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <br />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '100%' }}
                            label="Password"
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '100%' }}
                            label="Confirm Password"
                            type="password"
                            name='password2'
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button sx={{ width: '100%', mt: 4 }} variant="contained" type='submit'>Register</Button>
                        <br />
                        <NavLink to='/login'>
                            <Button sx={{ width: '100%', mt: 4 }} variant="text" type='submit'>Already registered? login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    { authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <img src={pic} alt="login_image" style={{ width: "100%", borderRadius: '10px' }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;