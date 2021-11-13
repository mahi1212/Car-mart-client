import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

const Product = (props) => {
    const { name, price, description, img } = props.product;
    return (
        <Grid item xs={12} sm={12} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={img}
                        alt="car image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h4>Price :{price} $ </h4> 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" color="primary">
                        Purchase
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;