import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from '../../SingleReciew/SingleReview';

const ShowReview = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <h2 style={{ textAlign: 'center', paddingBottom: '30px'}}>WHAT CLIENT SAYS ABOUT US</h2>
            <Grid container spacing={{ xs: 2, md: 2 }} sx={{ py: 3, background: '#ccc' }} columns={{ xs: 4, sm: 4, md: 12 }}>
                {
                    review.map(single => <SingleReview single={single} key={single.id}></SingleReview>)
                }
            </Grid>
            {review.length}
        </div>
    );
};

export default ShowReview;