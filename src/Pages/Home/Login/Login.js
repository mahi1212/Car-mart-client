import { Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import pic from '../../../images/login.jpg'
import Header from '../../Shared/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    // Form authentication
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    // Google authentication
    const handleGoogleSignin = (location, history) => {
        signInUsingGoogle(location, history)
    }
    return (
        <>
            <Header></Header>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <img src={pic} alt="login_image" sx={{ boxShadow: 5 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50vh', width: "100%", marginRight: '30px', borderRadius: '10px', marginTop: '2rem' }} />
                </Grid>
                <Grid item xs={12} md={6} style={{ marginTop: '6rem', background: '#fff', border: '1px solid #000', borderRadius: '10px', padding: '20px 0' }} >
                    <Typography variant="h4" gutterBottom sx={{ color: 'text.secondary', textAlign: 'center' }}>Login</Typography>
                    <form onSubmit={handleLoginSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <TextField id="standard-basic" sx={{ width: '75%', mt: 2 }}
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '75%' }}
                            label="Password"
                            type="password"
                            name='password'
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <br />
                        <Button sx={{ width: '75%', mt: 4 }} variant="contained" type='submit'>Login</Button>
                        <br />
                        <NavLink to='/register'>
                            <Button sx={{ width: '100%', mt: 4 }} variant="text" type='submit'>New here? Register</Button>
                        </NavLink>
                        {
                            isLoading && <CircularProgress />
                        }
                        {user?.email && <Alert severity="success">User Logged in!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p style={{ textAlign: 'center' }}>___________ <sub>or</sub> ___________</p>
                    <Box sx={{ textAlign: 'center' }}>
                        <i onClick={handleGoogleSignin}
                            style={{ color: '#1565C0', background: '#fff', margin: '0 auto', border: '1px solid #000', borderRadius: '50%', padding: '10px', cursor: 'pointer' }} class="fab fa-google fa-2x"></i>
                    </Box>
                </Grid>
            </Grid>
        </ >
    );
};

export default Login;