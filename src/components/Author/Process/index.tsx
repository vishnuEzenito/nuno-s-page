import { HomeData } from "@/lib/constants";
import React from "react"
import { Grid, Typography,useMediaQuery, useTheme, Box,Paper,IconButton,Button,Avatar,ButtonBase} from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {Mail,CheckCircle,ShoppingCart,Package,DollarSign} from 'react-feather';
import Link from "next/link";



const steps = [
  'Send us a seller registration request ​',
  'Complete the documentation​',
  'List your products ',
  'Get orders and deliver the products with our support',
  'Receive the payment from us ​'
];


export default function Process() {


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const icons = [<Mail key='icon1' color='#739072' size='20px' />, <CheckCircle key='icon2' color='#739072' size='20px'/>, <ShoppingCart key='icon3' color='#739072' size='20px'/>, <Package key='icon4'color='#739072' size='20px' />, <DollarSign key='icon5' color='#739072' size='20px' />]; // Define icons for each step


  return (<>
    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"/>      
        <Box sx={{ pb:'5rem',width:'100%', height: 'auto',px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '2rem' : (isLargeScreen ? '2rem' : (isExtraLargeScreen ? '2rem' : '2rem'))),display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
        <Typography variant="h1" sx={{textAlign: 'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '48px', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '3rem' : (isLargeScreen ? '3rem' : (isExtraLargeScreen ? '3rem' : '3rem'))), mb:'2rem' }}>
        Here is how you can get started
             </Typography>
             <Stepper
  activeStep={1}
  alternativeLabel={isSmallScreen ? false : true}
  orientation={isSmallScreen ? 'vertical' : 'horizontal'}
  sx={{px:isSmallScreen?'4rem':'0',mt:isSmallScreen?'0rem':'4rem',mb:isSmallScreen?'2rem':'4rem',width:'100%'}}
>
{steps.map((label, index) => (
  <Step key={index} 
    sx={{
      '.css-270y9e-MuiStepper-root .MuiStepConnector-lineVertical-lineVertical': {
        ml: '7px' // Adjust the vertical line spacing
      }
    }}
  >
    <StepLabel key={index}
      StepIconComponent={() => (
        <Avatar key={index} sx={{ bgcolor: '#D3E6CC' }}>{icons[index]}</Avatar>
      )}
    >
      <Typography
        variant="subtitle2"
        sx={{
          whiteSpace: 'break-spaces',
          textAlign: isSmallScreen?'left':'center',
          fontFamily: 'CircularStd, sans-serif',
          fontWeight: 100,
          color: '#8A8A89',
          fontSize: isSmallScreen ? '12px' : '14px',
          mt: '0.5rem'
        }}
      >
        {label}
      </Typography>
    </StepLabel>
  </Step>
))}

</Stepper>

<ButtonBase component={Link} href="#signup" sx={{
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
                Send Request
                </Typography>
              </Paper>
              </ButtonBase>
              </Box>
             


    </> );
}
