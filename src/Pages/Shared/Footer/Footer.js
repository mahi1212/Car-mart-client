import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

const Footer = () => {
    return (
        <div style={{ background: '#2D2D2D', padding: '20px' }}>
            <Grid container spacing={2} style={{ color: '#fff' }}>
                <Grid item sm={12} md={4}>
                    <h3>FIND US ON SOCIAL MEDIA</h3>
                    <a href="# " style={{ marginRight: '15px' }}><i class="fab fa-facebook fa-2x" style={{ color: '#486CB4' }}></i></a>
                    <a href="# " style={{ marginRight: '15px' }}><i class="fab fa-instagram fa-2x" style={{ color: '#DD3C83' }}></i></a>
                    <a href="# " style={{ marginRight: '15px' }}><i class="fab fa-twitter fa-2x" style={{ color: '#24A4F2' }}></i></a>
                    <a href="# "><i class="fab fa-google-plus-g fa-2x" style={{ color: '#FBBE0D' }}></i></a>
                    
                </Grid>
                <Grid item sm={12} md={4}>
                    <h3>CONTACT US DIRECTLY</h3>
                    <Box style={{ marginBottom: '15px' }}>
                        <i style={{ color: '#F6DDBD' }} class="fas fa-map-marker-alt fa-2x"></i>
                        <span style={{ marginLeft: '15px', fontSize: '18px' }}>   Uposhohor, Sylhet, Bangladesh</span>
                    </Box>
                    <Box style={{ marginBottom: '15px' }}>
                        <i style={{ color: '#D19595' }} class="fas fa-envelope fa-2x"></i>
                        <span style={{ marginLeft: '12px', fontSize: '18px' }}>car_mart@gmail.com</span>
                    </Box>
                    <Box style={{ marginBottom: '15px' }}>
                        <i style={{ color: '#F6DDBD' }} class="fas fa-mobile fa-2x"></i>
                        <span style={{ marginLeft: '25px', fontSize: '18px' }}>01778287079</span>
                    </Box>
                </Grid>
                <Grid item sm={12} md={4}>
                    <h3>IMPORTANT LINKS</h3>
                    <Box>
                        <a href="#" style={{color: '#fff'}}><h5>TERMS AND PRIVACY</h5></a>
                        <a href="#" style={{color: '#fff'}}><h5>LEAGAL TERMS</h5></a>
                        <a href="#" style={{color: '#fff'}}><h5>REVIEWS</h5></a>
                        <a href="#"style={{color: '#fff'}}><h5>PRODUCTS</h5></a>
                    </Box>
                </Grid>

            </Grid>
        </div>
    );
};

export default Footer;