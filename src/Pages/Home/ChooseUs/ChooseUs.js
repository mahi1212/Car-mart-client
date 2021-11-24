import { Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div>
            <h2 className='effect' style={{ textAlign: 'center' }}>WHY CHOOSE US</h2>
            <Container>
                <Grid container spacing={2} style={{ padding: '20px 0', height: '60vh' }}>
                    <Grid item sm={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', flexDirection: 'column', textAlign: 'left' }}>
                        <h3 style={{ textTransform: 'uppercase' }}>Let us know your opinion !</h3>
                        <h3 style={{ color: 'navy' }}>We work depending on your requirement</h3>
                        <h3 style={{ color: 'green' }}>We provide recovery service if anything goes wrong</h3>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <h3>Write What Your Heart Contains</h3>
                        <form action="mailto:mahi121.mr@gmail.com" >
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextField style={{ width: '48%' }} label="Name" variant="outlined" />
                                <TextField style={{ width: '48%' }} label="Email" type='email' variant="outlined" />
                            </Box>
                            <TextField style={{ width: '100%', margin: '10px 0 10px 0', height: '3rem' }} label="Description" type='text' variant="outlined" />
                            <Button type='submit' variant='contained' style={{margin: '10px 0'}}>Send Requirement</Button>
                        </form>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default ChooseUs;