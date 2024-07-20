import React from 'react'
import { Grid, Card, CardHeader, CardMedia, CardContent, Typography, Button } from '@mui/material'
function Product(props) {
    const { title, price, description, images, id } = props.product
    return (
        <Grid item key={id} xs={12} sm={3} md={2} key={id}>
            <Card >
                <CardHeader title={title} />

                <CardMedia
                    component="img"
                    height='194'
                    image={images[0]}
                    alt={title}
                />
                <CardContent>
                    <Typography variant='h6' color='primary'>
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                        {description}
                    </Typography>
                    <Button variant='contained' sx={{ width: '100%' }} >Add To Cart</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Product