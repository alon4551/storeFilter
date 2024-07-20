import React from 'react'
import Gallery from './../gallery/index';
import Search from '../../components/search';
import { Box } from '@mui/material';
function HomePage() {

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
            <Search />
            <Box sx={{ padding: 10 }}>
                <Gallery />
            </Box>
        </Box>
    )
}

export default HomePage