import { HomeData } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import { Typography,useMediaQuery, useTheme, Box,Toolbar,Paper,Grid } from '@mui/material';

export default function Benifits(){

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));

    return (<>
        <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"/>
            <Box sx={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), background:'#F9FBF9'}}>
             <Typography variant="h1" sx={{ maxWidth:'850px',textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '48px', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '3rem' : (isLargeScreen ? '3rem' : (isExtraLargeScreen ? '3rem' : '3rem'))), mb:'2rem' }}>
             Benefits of becoming a seller on All Mattr
             </Typography>
            <Grid container spacing={{ xs: 4, md:2, xl: 10 }} sx={{mb:'4rem',pt:'2rem'}}>
            {HomeData.benifits.list.map((item, index) => (
                <Grid item key={index} xs={12} md={4} lg={4}>
                <Paper elevation={0} sx={{p:'1rem',background:'#D3E6CC',borderRadius:'18px',minHeight:'180px',display:'flex',alignContent:'center',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                    <Typography variant="h1" sx={{ whiteSpace:'break-spaces',textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#7A7B7A', fontSize: isSmallScreen ? '14px' : '18px', mt:"0" }}>
                    {item.text}             
                    </Typography>
                    <Typography variant="subtitle2" sx={{whiteSpace:'break-spaces',textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '12px' : '16px', mt:"0.5rem", }}>
                    {item.content}             
                    </Typography>
                </Paper>
                </Grid>
            ))}
            </Grid>

            </Box>    
            </>)
}
