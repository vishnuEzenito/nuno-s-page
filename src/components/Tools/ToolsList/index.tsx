import { HomeData } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import { Typography,useMediaQuery, useTheme, Box,Toolbar,Paper,Grid } from '@mui/material';
import '../../../fonts/fonts.css'

export default function List(){

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

    return (<>
        <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"/>
            <Box sx={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), background:'#F9FBF9'}}>
            <Typography variant="h1" sx={{textAlign:isSmallScreen?'center':'left',fontFamily: 'classicsans', fontWeight: "bold", color: '#333333', fontSize: isSmallScreen ? '28px' : (isMediumScreen ? '45px' : (isLargeScreen ? '50px' : (isExtraLargeScreen ? '50px' : '45rem'))) }}>
            Find the right tool
      </Typography>
          <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',pr: isSmallScreen ? '0rem' : (isMediumScreen ? '10%' : (isLargeScreen ? '10%' : (isExtraLargeScreen ? '10%' : '10%'))),textAlign:isSmallScreen?'center':'left',fontFamily: 'classicsans', fontWeight: 'light', color: '#1c1c1c', fontSize: isSmallScreen ? '14px' : '20px', mt:"0.5rem", }}>
          To address your goals and challenges towards successful negotiation 
          </Typography>
            </Box>    
            </>)
}
