// components/HeroCarousel.js

import React,{useEffect,useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Typography, Grid,Box,ButtonBase,Paper } from '@mui/material';
import { Toolbar } from '@mui/material';
import Link from "next/link";


import { HomeData } from "@/lib/constants";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import '../../../fonts/fonts.css'



const images = [
  { bgimg: `${HomeData.hero.deskTopImgUrl}`,
   hdr1:'A global B2B marketplace for Sustainable Procurement',
   hdr2:'for Sustainable Procurement',
   subhdr1:'We help companies make sustainable procurements so that',
   subhdr1_1:'supply chains can operate in harmony with the environment.',
   subhdr2:'Choose us for hassle-free procurement of raw material to',
   subhdr2_1:'reduce the environmental footprint of your business.',
   img1:`${HomeData.hero.title.img1}`,
   img1txt:'Reduce Carbon Footprint',
   img2:`${HomeData.hero.title.img2}`,
   img2txt:'Supply Chain Resilience​',
   img3:`${HomeData.hero.title.img3}`,
   img3txt:'Quality Assurance',
   img4:`${HomeData.hero.title.img4}`,
   img4txt:'Verified Suppliers'},

  { bgimg: `${HomeData.hero.deskTopImgUrl2}`, hdr1:'A platform to simplify your sustainable sourcing experience',hdr2:'sustainable sourcing experience',subhdr1:'Discover raw material and products that are good for your', subhdr1_1:'Business and for the Planet.',subhdr2:'We bring together trusted suppliers , partners and experts so',subhdr2_1:'you can search, quote and purchase - all in one place!',img1:`${HomeData.hero.title.img5}`,img1txt:'Renewable',img2:`${HomeData.hero.title.img6}`,img2txt:'Biodegradable',img3:`${HomeData.hero.title.img7}`,img3txt:'Low Environmental Footprint',img4:`${HomeData.hero.title.img8}`,img4txt:'Certified Sustainable'}
];

const Hero = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0); // Simulating 2 seconds delay
  }, []);

  return (<>

    <Box sx={{ mt:"2rem", pb:'2rem',width:'100%', height: 'auto',px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem')))}}>
  
        <Grid container spacing={{ xs:2, md:2, xl: 4 }} sx={{flexWrap: 'wrap'}}>
        <Grid item key={'HeroImage'} xs={12} md={4} lg={4}>
      <img
    src={'/assets/book.png'}
    alt='bgimage'
    style={{
      width: '100%',
      height: '100%',
      objectFit:'contain',
    }}
  /> 
      </Grid>
      
      <Grid item key={'Herotext'} xs={12} md={8} lg={8} sx={{mt:isSmallScreen ? '1.25rem' : '6%',display:'flex',flexDirection:'column',alignItems:isSmallScreen?'center':'start'}}>
      <Typography variant="h1" sx={{ textAlign:isSmallScreen?'center':'left',fontFamily: 'classicsans', fontWeight:'bold', color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : (isMediumScreen ? '40px' : (isLargeScreen ? '45px' : (isExtraLargeScreen ? '45px' : '40rem'))) }}>
      Empowering yourself with 55 tools to negotiate a better job, life, community, and world
      </Typography>
          <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',pr: isSmallScreen ? '0rem' : (isMediumScreen ? '10%' : (isLargeScreen ? '20%' : (isExtraLargeScreen ? '20%' : '10%'))),textAlign:isSmallScreen?'center':'left',fontFamily: 'classicsans', fontWeight: 'light', color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '20px', mt:"0.5rem", }}>
          Nuno Delicado is a negotiation expert with extensive experience in complex negotiations worldwide. Learn from this practical guide and negotiate for maximum impact     
          </Typography>
          <Box sx={{display:"flex",flexDirection:'row',gap:'2rem'}}>
          <ButtonBase  sx={{
                mt:'2rem',
                borderRadius: '12px',
                width:'auto'}}>
        <Paper sx={{
                borderRadius: '12px',
                background:'#B34038',
                width:'auto',
                px:'2rem',
                py:'0.3rem',
                maxWidth: isSmallScreen ? 'auto' : (isMediumScreen ? '200px' : (isLargeScreen ? '200px' : (isExtraLargeScreen ? '200px' : '200px')))
                }}>
                <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#fff',fontSize:isSmallScreen ? '14px' : '20px',py:'0.5rem',}}>
                Buy Now
                </Typography>
              </Paper>
              </ButtonBase>
              <ButtonBase  sx={{
                mt:'2rem',
                borderRadius: '12px',
                width:'auto'}}>
        <Paper sx={{
                borderRadius: '12px',
                background:'#EEEEEE',
                width:'auto',
                px:'1rem',
                py:'0.3rem',
                maxWidth: 'auto',
                }}>
                <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#333333',fontSize:isSmallScreen ? '14px' : '20px',py:'0.5rem'}}>
                Get Free Sample
                </Typography>
              </Paper>
              </ButtonBase>
              </Box>
      </Grid>

  </Grid>
              </Box>
    </>);
};

export default Hero;
