import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Loading.css"

export const Loading = () => {
    return (
         <Box className="Box" sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}
