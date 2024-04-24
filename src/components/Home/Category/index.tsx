import { Button } from "@nextui-org/react";
import React , { useRef } from "react";
import { HomeData } from "@/lib/constants";
import { Typography,useMediaQuery, useTheme, Box,Paper,IconButton } from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Link from "next/link";



export default function Category() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLElement).scrollLeft += scrollOffset;
    }
  };
  


  return (<>

    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"></link>
   <Box>
  <Typography variant="h1" sx={{ textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '48px', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '2rem' : (isLargeScreen ? '2rem' : (isExtraLargeScreen ? '2rem' : '2rem'))) }}>
    Explore our Categories
  </Typography>
  <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#8C8C8C',fontSize:isSmallScreen?"14px":'18px',mt:'1.25rem',mb:'1.5rem',px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' :  (isLargeScreen ? '4.5rem' :(isExtraLargeScreen ? '5.5rem' : '4.5rem')))}}>
  Click to access our collection of products to find out prices and seek quotations.
      </Typography>
  <div style={{ overflowX: 'auto', flexWrap: 'nowrap', padding: '1rem', paddingLeft: isSmallScreen?'1.5rem':'4rem', display: 'flex', alignItems: 'center', scrollbarWidth: 'none', msOverflowStyle: 'none', }} ref={scrollContainerRef}>
    {HomeData.category.list.map((item, index) => (
      <Box key={index} sx={{ display: 'inline-block', marginLeft: '1.5rem', marginBottom: '0.5rem' }}> {/* Added marginBottom */}
       <Link href={'/shop'}>
        <Paper
          sx={{
            position: 'relative',
            height: '300px',
            width: '200px',
            overflow: 'hidden', 
            borderRadius: '18px'
          }}
        > 
          <Box sx={{ width:'100%', height: '100%', position:'relative' }}>
            <img
              src={item.imgUrl}
              alt={item.text}
              style={{
                width: '100%',
                height: '100%',
                objectFit:'cover',
                borderRadius: '18px',
                position:'absolute',
                top: 0,
                left: 0,
              }}
            /> 
            <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '18px',
              position:'absolute',
              background: 'linear-gradient(115deg, rgba(36,44,14,1) 0%, rgba(153,153,153,0) 100%)',
              top: 0,
              left: 0,
            }}
          />
            <Box sx={{ textAlign:"left",position: 'absolute', top: 0, left: 0, zIndex: 1100, padding: '1rem', width: '100%', whiteSpace:'break-spaces' }}>
              <Typography 
                variant="body2" 
                component="div" 
                sx={{ 
                  color: 'white', 
                  fontFamily: 'CircularStd, sans-serif', 
                  fontWeight: 500,
                  fontSize: '18px',
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        </Paper>
        </Link>
      </Box>
    ))}
  </div>
  <Box sx={{ display: 'flex', flexDirection:'row' , justifyContent: 'center', alignItems: 'center', p:'0px',mt:'1rem',mb:'2.5rem'}}>
  <IconButton
          onClick={() => scroll(-700)}
          style={{ background:'#EBF4E8',height:'35px',width:'35px',marginRight:'1px'}}
        >
        <ArrowBackIosNewRoundedIcon sx={{color:'#739072',height:'20px',width:'20px',strokeWidth:'1.6px'}}/>
        </IconButton>
        <IconButton
          onClick={() => scroll(700)}
          style={{ background:'#EBF4E8',height:'35px',width:'35px',marginLeft:'1px'}}
          >
        <ArrowForwardIosRoundedIcon  sx={{color:'#739072',height:'20px',width:'20px',strokeWidth:'1.6px'}}/>
        </IconButton>
        </Box>
        
</Box>
    </>);
}
