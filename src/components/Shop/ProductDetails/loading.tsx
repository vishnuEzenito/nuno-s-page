import Image from "next/image";
import useProductList from "@/lib/hooks";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  Paper,
  Skeleton,
  Button,
  ButtonBase,
  Stack,
  Chip,
  Avatar,
  Divider
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {ChevronDown,Star} from 'react-feather';

export default function ProductDetails() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const { productList, fetchData } = useProductList();
  const [productData, setData] = useState();
  const [loading, setLoading] = useState(true);
 

  // Render the component using the fetched data
  return (
    <>
        <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet" />
        <Grid container spacing={{ xs:1, md:1, xl: 4 }} gap={{xs:0,md:4,lg:12,xl:12}} sx={{flexWrap: 'wrap'}}>

        <Grid item key={'text'} xs={12} md={4} lg={4} sx={{my:'12%'}}>
          <Paper elevation={0} sx={{borderRadius:'12px',height:'100%', width:'100%', background:'#E5E5E5'}}>
         
      </Paper>
      </Grid>

      <Grid item key={'text'} xs={12} md={5.5} lg={5.5} sx={{my:'12%',display:'flex',flexDirection:'column',alignItems:'start'}}>
      <Skeleton variant="text"
              sx={{
                width: '100%',
                fontSize: isSmallScreen ? '28px' : '48px',
                mb:'1rem',
              
              }}
            />    
          <Skeleton variant="text"
              style={{
                width: '100%',
                fontSize: isSmallScreen ? '14px' : '16px',
              }}
            />    
                      <Skeleton variant="text"
              sx={{
                mt:'0.25rem',
                width: '100%',
                fontSize: isSmallScreen ? '14px' : '16px',
              }}
            /> 
                      <Skeleton variant="text"
              sx={{
                mt:'0.25rem',
                width: '100%',
                fontSize: isSmallScreen ? '14px' : '16px',
              }}
            /> 
                      <Skeleton variant="text"
              sx={{
                mt:'0.25rem',
                width: '100%',
                fontSize: isSmallScreen ? '14px' : '16px',
              }}
            />       
         

          <Box sx={{ width: '100%', flexWrap:'wrap', flexDirection: 'row', gap: '1rem',mt:'1rem'}}>
          <Skeleton variant="rounded" 
             style={{
               width:'100px',
               height:'40px',
               border:'100px',
               borderRadius:'100px',
             }}
           />
          </Box>
          

        <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>     
          <Paper elevation={0} sx={{
                borderRadius: '100px',
                background:'#E5E5E5',                
                width:'100px',
                height:'35px',
                px:'2rem',
                py:'0.4rem',
                mt:'1rem',
                }}>
              </Paper>
              <Divider sx={{color:'E5E7EB',pt:'0.5rem',pb:'1rem'}}/>
        </Box>


          <ButtonBase sx={{
                mt:'2rem',
                borderRadius: '100px',
                width:'auto'}}>
        <Paper sx={{
                borderRadius: '100px',
                background:'#E5E5E5',
                width:'auto',
                px:'2rem',
                py:'0.4rem',
                mb:'1rem'
                }}
                elevation={0}
                >
                <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#fff',fontSize:'18px',py:'0.43rem',}}>
                Enquire Now
                </Typography>
              </Paper>
              </ButtonBase>
      </Grid>
      </Grid>
    </>
  );
}
