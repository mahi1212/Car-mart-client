import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>
            <Typography paragraph>
                <h1> Notice : </h1>
                <h2> Our payment system is currently disabled! We are woking for a secured gateway system.</h2>
                <NavLink to="/home" style={{ color: '#fff', textDecoration: 'none',borderRadius: '3px', padding: '7px 15px', background: 'green' }}>
                    Back To Home
                </NavLink>
            </Typography>
        </div>
    );
};

export default DashboardHome;