import { HomeData } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

import { Typography,useMediaQuery, useTheme, Box,Toolbar,Paper,Grid } from '@mui/material';
import '../../../fonts/fonts.css'

export default function WhyChooseUs(){

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

    return (<>
            <Box sx={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), background:'#FCFCFC'}}>
             <Typography variant="h1" sx={{ textAlign: 'center',fontFamily: 'classicsans', fontWeight: "bold", color: '#333333', fontSize: isSmallScreen ? '28px' : '45px', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '3rem' : (isLargeScreen ? '3rem' : (isExtraLargeScreen ? '3rem' : '3rem'))), mb:'0.5rem' }}>
             How to negotiate like an expert?
             </Typography>
             <Typography variant="subtitle2" sx={{textAlign:'center', whiteSpace: isMediumScreen?'balance':'break-spaces',fontFamily: 'classicsans', fontWeight: 'light', color: '#333333', fontSize: isSmallScreen ? '14px' : '20px' }}>
             Structured tools can accelerate learning, systematic application, and negotiation results.         
          </Typography>
            <Grid container spacing={{ xs: 4, md:2, xl: 10 }} sx={{mb:'4rem',pt:'3rem'}}>
            {HomeData.whyChooseUs.list.map((item, index) => (
                <Grid item key={index} xs={6} md={3} lg={3}>
                <div className='flex flex-col items-center'>
                    <Image src={item.imgUrl} width={230} height={230} alt='' />
                    <Typography variant="h1" sx={{ textAlign: 'center',fontFamily: 'classicsans', fontWeight: 'bold', color: '#333333', fontSize: isSmallScreen ? '14px' : '36px', mt:"2rem" }}>
                    {item.text}             
                    </Typography>
                    <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',textAlign: 'center',fontFamily: 'classicsans', fontWeight: 'light', color: '#333333', fontSize: isSmallScreen ? '12px' : '20px', mt:"0.5rem", }}>
                    {item.content}             
                    </Typography>
                </div>
                </Grid>
            ))}
            </Grid>

            </Box>    
            </>)
}
