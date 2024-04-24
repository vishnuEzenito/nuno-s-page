import Image from "next/image";
import { Typography, useMediaQuery, useTheme, Box, Paper, ButtonBase, Toolbar, Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useState, Suspense } from "react";
import {ChevronRight,Star} from 'react-feather';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));




  return (
    <>
    <Paper
          key={'skeleton'}
          sx={{
            position:'relative',
            borderRadius: '16px',
            height: isSmallScreen ? '100%' : '100%',
            width: isSmallScreen ? '47.5%' : '220px',
          }}
        >
           <Skeleton variant="rounded" 
             
              style={{
                width: isSmallScreen ? '100%' : '220px',
                height: '215px',
                borderTopLeftRadius:'16px',
                borderTopRightRadius:'16px',
              }}
            />
          <Box sx={{ p: '1rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="body2"
              
            >
           <Skeleton variant="text"
              style={{
                width: '100%',
                fontSize: isSmallScreen ? '12px' : '16px',
              }}
            />        </Typography>
    
    
             <Box sx={{display:'flex',flexDirection:'row',width:'100%',pt:'0.75rem'}}>          
                <Box sx={{ textAlign:"left", width: '80%',whiteSpace:'break-spaces',p:'0'}}>
                  <Typography 
                    variant="body2" 
                    component="div" 
                    sx={{ 
                      color: '#494949', 
                      fontFamily: 'CircularStd, sans-serif', 
                      fontWeight: 400,
                      fontSize: isSmallScreen?'12px':'14px',
                    }}
                  >
               <Skeleton variant="text"
              style={{
                width: '100%',
                fontSize: isSmallScreen ? '12px' : '16px',
              }}
                  />     
               </Typography>
                </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',width:'100%',pt:'0.75rem'}}>          
                
        <Box sx={{display:'flex',flexDirection:'row',width:'100%',pt:'0.75rem'}}>          
          <Box sx={{ textAlign:"left", width: '50%',whiteSpace:'break-spaces',p:'0'}}>
            <Typography 
              variant="body2" 
              component="div" 
              sx={{ 
                color: '#494949', 
                fontFamily: 'CircularStd, sans-serif', 
                fontWeight: 400,
                fontSize: isSmallScreen?'20px':'24px',
              }}
            >
              <Skeleton variant="text"
              style={{
                width: '100%',
                fontSize: isSmallScreen?'20px':'24px',
              }}
            />    
            </Typography>
          </Box>
          <Box sx={{ textAlign:"end", width: '50%',whiteSpace:'break-spaces',p:'0', display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>
            <ChevronRight color='#040404' size={10} style={{marginTop:'1px'}}/>
            <Typography 
              variant="body2" 
              component="div" 
              sx={{ 
                color: '#040404', 
                fontFamily: 'CircularStd, sans-serif', 
                fontWeight: 100,
                fontSize: '10px',
                pl:'4px'
              }}
            >
              View Details
            </Typography>
          </Box>
        </Box>
    
                </Box>
              </Box>
        </Paper>

    </>
  );
}
