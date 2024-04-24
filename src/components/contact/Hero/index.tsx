// components/HeroCarousel.js

import React,{useEffect,useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Typography, Grid,Box,ButtonBase,Paper } from '@mui/material';
import { TextField,Alert,AlertTitle } from '@mui/material';

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

    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"></link>
    <Box sx={{ mb:'4rem',mt:'4rem', display: 'flex',textAlign:'center', flexDirection: 'column', justifyContent: 'center', alignItems:'center', pb:'3rem',width:'100%', height: 'auto',px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem')))}}>
      <Typography variant="h1" sx={{textAlign:'center',fontFamily: 'classicsans', fontWeight: "bold", color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : (isMediumScreen ? '45px' : (isLargeScreen ? '50px' : (isExtraLargeScreen ? '50px' : '45rem'))) }}>
      
      Get in touch with us!
      </Typography>
          <Typography variant="subtitle2" sx={{textAlign:'center',whiteSpace: isMediumScreen?'balance':'break-spaces',fontFamily: 'classicsans', fontWeight: 'light', color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '20px', mt:"0.5rem", }}>
          Contact us to for support or colabration
          </Typography>
          <Box sx={{gap:'1rem',display:'flex',flexDirection:'column',justifyContent:'center',width:'50%',mt:'2rem'}}>
      <TextField
          id="name"
          placeholder="Name"
          name="name"
          required
          type='name'
          sx={{background:'#F4F4F4',border:'#f4f4f4',borderRadius:'12px',width:'100%'}}

        />
      <TextField
          name="email"
          placeholder="Email"
          required
          id="email"
          type='email'
          sx={{background:'#F4F4F4',borderRadius:'12px',width:'100%'}}

        />

      <TextField name="Org" id="org" placeholder="organisation" type='org' required sx={{background:'#F4F4F4',borderRadius:'12px',width:'100%'}}

/>

      <TextField
          id="message"
          name="message"
          label=""
          multiline
          rows={4}
          placeholder="Message"
          defaultValue=""
          sx={{background:'#F4F4F4',borderRadius:'12px',width:'100%'}}
        />
  

    </Box>
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
                minWidth:'200px',
                }}>
                  
                <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#fff',fontSize:isSmallScreen ? '14px' : '20px',py:'0.5rem',}}>
                Send
                </Typography>
              </Paper>
              </ButtonBase>
              </Box>


              </Box>
    </>);
};

export default Hero;
