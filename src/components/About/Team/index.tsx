import Image from "next/image";
import { HomeData } from "@/lib/constants";
import React from "react"
import { Grid, Typography,useMediaQuery, useTheme, Box,Paper,IconButton,Button,ButtonBase } from '@mui/material';
export default function Team() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));


  return (<>
    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"/>      
        <Box sx={{ pb:'2rem',width:'100%', height: 'auto',px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '2rem' : (isLargeScreen ? '2rem' : (isExtraLargeScreen ? '2rem' : '2rem')))}}>
        <Grid container spacing={{ xs:2, md:2, xl: 4 }} sx={{flexWrap: 'wrap'}}>
      
      <Grid item key={'text'} xs={12} md={8} lg={8} sx={{display:'flex',flexDirection:'column',alignItems:isSmallScreen?'center':'start'}}>
      <Typography variant="h1" sx={{ textAlign:isSmallScreen?'center':'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 400, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '36px' }}>
      Pooja Srinivas - Founder
      </Typography>
          <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'balance',textAlign:isSmallScreen?'center':'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px', mt:"1rem", }}>
          Pooja is as seasoned project management professional with over 15 years of experience leading global roles for organizations like Schneider Electric, Firstsource and Infosys .         
           </Typography>
           <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'balance',textAlign:isSmallScreen?'center':'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px', mt:"1rem", }}>
           Having led award-winning impact projects , she specializes in building robust systems, designing impeccable user experience and mobilizing stakeholders to create impact. </Typography>
           <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'balance',textAlign:isSmallScreen?'center':'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px', mt:"1rem", }}>
           Her skills coupled with the ambition of building a thriving Green Commerce Ecosystem in the Global South led to the creation of ALL MATTR.
            </Typography>
         
      </Grid>

      <Grid item key={'text'} xs={12} md={4} lg={4}>
      <img
    src='/founderimg.png'
    alt='bgimage'
    style={{
      width: '90%',
      height: '90%',
      objectFit:'contain',
    }}
  /> 
      </Grid>

  </Grid>
  
              </Box>
             


    </> );
}


