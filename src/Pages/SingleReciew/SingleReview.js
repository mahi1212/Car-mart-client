import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const SingleReview = (props) => {
    const { name, email, description } = props.single
    return (
        <Grid item xs={12} sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center', }}>
            <Paper elevation={3} sx={{width: '250px', textAlign: 'center', padding: '20px', borderRadius:'5px'}}>
                <Typography variant='h5' sx={{color: 'green'}}>{name.toUpperCase()}</Typography>
                <hr />
                <Typography variant='h6' sx={{margin: '5px 0', textAlign: 'left'}}>{description}</Typography>
                <Typography variant='subtitle2' sx={{ textAlign: 'left'}}>Contact : {email}</Typography>
            </Paper>
        </Grid>
    );
};

export default SingleReview;