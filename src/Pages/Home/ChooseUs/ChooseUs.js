import { Grid } from '@mui/material';
import React from 'react';
import payment from '../../../images/payment.png'
import discount from '../../../images/discount.png'
import flash from '../../../images/flash.png'

const ChooseUs = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>WHY CHOOSE US</h2>
            <Grid container spacing={2}>
                <Grid item sm={12} md={4}>
                    <img style={{width: '100%'}} src={payment} alt="" />
                </Grid>
                <Grid item sm={12} md={4}>
                    <img style={{width: '100%'}} src={discount} alt="" />
                </Grid>
                <Grid item sm={12} md={4}>
                    <img style={{width: '100%'}} src={flash} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default ChooseUs;