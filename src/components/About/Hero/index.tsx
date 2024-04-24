import Image from "next/image";
import { Typography, useMediaQuery, useTheme, Box, Paper, IconButton, Toolbar, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { HomeData } from "@/lib/constants";
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useState } from "react";
import mockImage from "/about1.png";

export default function Hero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [loading, setLoading] = useState(true);
  const [firstImgHeight, setFirstImgHeight] = useState(0);
  const [firstImgLoaded, setFirstImgLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulating 1.5 seconds delay
  }, []);

  const handleFirstImgLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Get the height of the loaded image
    const img = event.target as HTMLImageElement;
    setFirstImgHeight(img.height);
    // Set firstImgLoaded to true once the image is loaded
    setFirstImgLoaded(false);
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet" />
      <Toolbar />
      <Box sx={{ py: '2rem', width: '100%', height: 'auto', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '2rem' : (isLargeScreen ? '2rem' : (isExtraLargeScreen ? '2rem' : '2rem'))) }}>
        <Typography variant="h1" sx={{ textAlign: 'center', fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '48px', mt: '2rem' }}>
          Bringing sustainability to supply chains
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: 'break-spaces', textAlign: 'center', fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8C8C8C', fontSize: isSmallScreen ? '14px' : '18px', mt: '1.25rem', mb: '1.rem' }}>
          we are creating a greener tomorrow for B2B procurements!
        </Typography>
        {loading ? (
          <Box sx={{ borderRadius: '8px', paddingTop: '1.5rem', px: isSmallScreen ? '0rem' : (isMediumScreen ? '2.5%' : (isLargeScreen ? '10%' : (isExtraLargeScreen ? '10%' : '2.5%'))) }}>
             <div style={{paddingLeft: isSmallScreen ? '0rem' : (isMediumScreen ? '2.5%' : (isLargeScreen ? '10%' : (isExtraLargeScreen ? '10%' : '2.5%'))), paddingRight: isSmallScreen ? '0rem' : (isMediumScreen ? '2.5%' : (isLargeScreen ? '10%' : (isExtraLargeScreen ? '10%' : '2.5%'))), borderRadius: '8px' }}>
                <img
                  src='/about1.png'
                  alt='about1'
                  onLoad={handleFirstImgLoad}
                  style={{
                    width: "100%",
                    height:'auto',
                    objectFit: "cover",
                    borderRadius: '8px'
                  }}
                />
              </div>
          </Box>
        ) : (
          <Carousel
            autoPlay={true}
            animation="slide"
            indicators={true}
            navButtonsAlwaysInvisible={true}
            swipe={false}
          >
            {HomeData.about.map((image, idx) => (
              <div key={idx} style={{paddingTop: '1.5rem', paddingLeft: isSmallScreen ? '0rem' : (isMediumScreen ? '2.5%' : (isLargeScreen ? '10%' : (isExtraLargeScreen ? '10%' : '2.5%'))), paddingRight: isSmallScreen ? '0rem' : (isMediumScreen ? '2.5%' : (isLargeScreen ? '10%' : (isExtraLargeScreen ? '10%' : '2.5%'))), borderRadius: '8px' }}>
                <img
                  src={image.img}
                  alt={`Slide ${idx + 1}`}
                  style={{
                    width: "100%",
                    height:'auto',
                    minHeight:`${firstImgHeight}`,
                    objectFit: "cover",
                    borderRadius: '8px'
                  }}
                />
              </div>
            ))}
          </Carousel>
        )}
        <Box sx={{ paddingTop: '0.5rem', px: isSmallScreen ? '0rem' : (isMediumScreen ? '2.5%' : (isLargeScreen ? '10%' : (isExtraLargeScreen ? '10%' : '2.5%'))) }} >
          <Typography variant="body2" sx={{ whiteSpace: 'break-spaces', textAlign: 'left', fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8C8C8C', fontSize: isSmallScreen ? '14px' : '18px', mt: '1.25rem', mb: '1.rem' }}>
            ALL MATTR is a global B2B marketplace that enables businesses to source sustainably.​
            Our platform offers a curated selection of sustainable raw materials and products which can be used in manufacturing and operations by businesses that want to become sustainable.​
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: 'break-spaces', textAlign: 'left', fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8C8C8C', fontSize: isSmallScreen ? '14px' : '18px', mt: '1.25rem', mb: '1.rem' }}>
            Whether you are searching for renewable materials, ethically sourced commodities, or low emission products, we are here to offer a hassle-free procurement experience engaging trusted suppliers and verified products.​
          </Typography>
        </Box>
      </Box>

      <Box sx={{ background:'#F9FBF9' , py: '4rem', width: '100%', height: 'auto', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '2rem' : (isLargeScreen ? '2rem' : (isExtraLargeScreen ? '2rem' : '2rem'))) }}>
          
        <Grid container spacing={{ xs: 2, md: 2, xl: 4 }} sx={{ }}>

        <Grid item key={'form'} xs={12} md={6} lg={6} sx={{ }}>
          <Typography variant="h1" sx={{ textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 400, color: '#5B5B5B', fontSize: isSmallScreen ? '14px' : '36px',mt:"1rem", }}>
      VISION
      </Typography>
          <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8c8c8c', fontSize: isSmallScreen ? '14px' : '18px', mt:"1rem",px:'2rem' }}>
          To be the world’s leading enterprise inproviding solutions for conscious commerce.    
          </Typography>
          </Grid>
          <Grid item key={'form'} xs={12} md={6} lg={6} sx={{}}>

          <Typography variant="h1" sx={{ textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 400, color: '#5B5B5B', fontSize: isSmallScreen ? '14px' : '36px',mt:"1rem", }}>
      MISSION
      </Typography>
          <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8c8c8c', fontSize: isSmallScreen ? '14px' : '18px', mt:"1rem", px:'2rem' }}>
          To offer an efficient and compelling platform that accelerates regenerative sourcing at a global scale.    
          </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
