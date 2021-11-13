import React from 'react';
import background from '../../../images/banner.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${background})`,
    // marginTop: '200px',
    height: '80vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgrounPosition: 'center',
    backgroundSize: '100% 100%',
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 , width: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ paddingLeft: '50px' }}>
                    <Box style={{}} >
                        <Typography variant="h5" sx={{ width: '50%', fontWeight: '700', color: '#fff', background: '#000'}} style={{marginTop: '250px', padding: '20px', borderRadius: '0 10px 10px 0'}}>
                            DON'T DREAM IT <br /> DRIVE IT!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{}}>
                    {/* <img style={{ width: '400px' }} src={background} alt="" /> it looks bad design*/}
                </Grid>
            </Grid>

        </Box>

    );
};

export default Banner;