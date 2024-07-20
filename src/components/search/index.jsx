import React, { useContext } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { Store, StoreFilter } from '../../App'
function Search() {
    const { storeFilter, setStoreFilter } = useContext(StoreFilter)
    const { store } = useContext(Store)
    const onChange = (event) => {
        if (event.target.value == '')
            setStoreFilter(store.products)
        else {
            setStoreFilter(store.products.filter((product) =>
                product.title.toLowerCase().includes(event.target.value.toLowerCase())
            ))
        }
    }
    return (
        <Box width={'100%'} justifyContent={'center'} alignItems={'center'} display={'flex'} padding={2} flexDirection={'column'}>
            <Typography variant='h4' color={'primary'}>
                Enter Product Name
            </Typography>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={(onChange)} />
        </Box>
    )
}

export default Search