import { HomeData } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import { Typography,useMediaQuery, useTheme, Box,Toolbar,Paper,Grid } from '@mui/material';

export default function WhyChooseUs(){

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

    return (<>
        <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"/>
            <Box sx={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), background:'#fff'}}>
             <Typography variant="h1" sx={{ textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '48px', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '3rem' : (isLargeScreen ? '3rem' : (isExtraLargeScreen ? '3rem' : '3rem'))), mb:'2rem' }}>
             Why Choose Us?
             </Typography>
            <Grid container spacing={{ xs: 4, md:2, xl: 10 }} sx={{mb:'4rem'}}>
            {HomeData.whyChooseUs.list.map((item, index) => (
                <Grid item key={index} xs={6} md={3} lg={3}>
                <div className='flex flex-col items-center'>
                    <Image src={item.imgUrl} width={190} height={190} alt='' />
                    <Typography variant="h1" sx={{ textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#7A7B7A', fontSize: isSmallScreen ? '14px' : '18px', mt:"0" }}>
                    {item.text}             
                    </Typography>
                    <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '12px' : '16px', mt:"0.5rem", }}>
                    {item.content}             
                    </Typography>
                </div>
                </Grid>
            ))}
            </Grid>

            </Box>    
            </>)
}
