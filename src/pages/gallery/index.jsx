import React, { useContext, useRef } from 'react'
import { Store, StoreFilter } from '../../App'
import { Grid } from '@mui/material'
import Product from '../../components/product'
function Gallery() {
    const { storeFilter } = useContext(StoreFilter)
    return (
        <Grid container spacing={{ xs: 5, md: 1 }}>
            {
                storeFilter.map((product) => {
                    return (
                        <Product product={product} key={product.id} />
                    )
                })
            }
        </Grid>
    )
}

export default Gallery