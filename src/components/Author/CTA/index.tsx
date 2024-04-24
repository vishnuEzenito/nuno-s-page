import { HomeData } from "@/lib/constants";
import Image from "next/image";
import React from "react"
import { Grid, Typography,useMediaQuery, useTheme, Box,Toolbar,Paper,IconButton,Button,ButtonBase } from '@mui/material';

export default function CTA() {


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));


  return (<>
    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"/>      
        <Box sx={{ width:'100%', height: '40vh', position:'relative',}} >
            <img
              src={HomeData.cta.section1.bgImg}
              alt='bgimage'
              style={{
                width: '100%',
                height: '100%',
                objectFit:'cover',
                position:'absolute',
                top: 0,
                left: 0,
              }}
            /> 
            <div
            style={{
              width: '100%',
              height: '100%',
              position:'absolute',
              background: 'linear-gradient(90deg, rgba(226, 238, 221,0.73) 45%, rgba(153,153,153,0) 100%)',
              top: 0,
              left: 0,
            }}
          />
            <Box sx={{ textAlign:"left",position: 'absolute', top: 0, left: 0, zIndex: 1100, width: 'auto', whiteSpace:'break-spaces',pl: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '2rem' : (isLargeScreen ? '2rem' : (isExtraLargeScreen ? '2rem' : '2rem')))  }}>
        <Typography variant="h1" sx={{whiteSpace:isSmallScreen?'normal':'break-spaces',pr:isSmallScreen ? '1rem' : (isMediumScreen ? '25%' :  (isLargeScreen ? '30%' :(isExtraLargeScreen ? '40%' : '15%'))),fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color:'#5B5B5B',fontSize: isSmallScreen?"30px":"48px",}}>
        {HomeData.cta.section1.title.txt1}
        </Typography>
        <ButtonBase  sx={{
                mt:'2rem',
                borderRadius: '100px',
                width:'178px'}}>
        <Paper sx={{
                borderRadius: '100px',
                background:'#739072',
                width:'178px',
                px:'2rem',
                py:'0.4rem',
                }}>
                <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#fff',fontSize:'18px',py:'0.5rem',}}>
                {HomeData.cta.section1.buttonText}
                </Typography>
              </Paper>
              </ButtonBase>
            </Box>
  
              </Box>



    </> );
}
