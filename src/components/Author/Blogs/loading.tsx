import { Button } from "@nextui-org/react";
import React from "react";
import Skeleton from '@mui/material/Skeleton';
import { Typography,useMediaQuery, useTheme, Box,Paper,IconButton,Tooltip} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {ArrowUpRight,Star} from 'react-feather';
import '../../../fonts/fonts.css'




export default function Loading() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));



  return (<>
   
 <Box  sx={{ display: 'inline-block', marginLeft: '2rem', marginBottom: '0.5rem' }}> 
   {/* @ts-ignore */}
      <Paper
      sx={{
        position:'relative',
        borderRadius: '16px',
        height: isSmallScreen ? '100%' : '417px',
        width: isSmallScreen ? '300px' : '314px',
        pb: '2rem',
        paddingTop:'1rem'
      }}
      
    >
      {/* @ts-ignore */}

    
 {/* @ts-ignore */}
<Skeleton
variant="rounded"
  sx={{
    marginLeft:'1rem',
    marginRight:'1rem',
    width: '90%',
    height: '80%',
    borderRadius : '12px'
  }}
/>
      <Box sx={{ px: '1rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
  
         <Box sx={{display:'flex',flexDirection:'row',width:'100%',pt:'0.75rem'}}>          
            <Box sx={{ textAlign:"left", width: '85%',whiteSpace:'break-spaces',p:'0'}}>
            {/* @ts-ignore */}
            <Skeleton variant="text" sx={{ fontSize: '3rem' }} />
            </Box>
            <Box sx={{ textAlign:"end", width: '10%',whiteSpace:'break-spaces',p:'0', display:'flex',flexDirection:'row',marginLeft:'1rem'}}>
              <ArrowUpRight color='#333333' size={24} style={{marginTop:'1rem'}}/>
            </Box>
            </Box>            
            <Box sx={{display:'flex',flexDirection:'column',width:'100%',pt:'0.25rem'}}>
            <Skeleton variant="text" sx={{ fontSize: '1rem', width:'50%' }} />


</Box>

  
            </Box>
    </Paper>
      </Box>
       </>);
}
