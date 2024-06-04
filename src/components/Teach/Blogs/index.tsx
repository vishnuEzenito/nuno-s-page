import { Button } from "@nextui-org/react";
import React , { useRef,useEffect } from "react";
import { HomeData } from "@/lib/constants";
import { Typography,useMediaQuery, useTheme, Box,Paper,IconButton,Tooltip} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {ArrowUpRight,Star} from 'react-feather';
import Link from "next/link";
import '../../../fonts/fonts.css'
import useProductList from '@/lib/hooks'




export default function Blogs() {

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
  const { fetchBlogData } = useProductList();

  useEffect(() => {
    const fetchData = async () => {
	  await fetchBlogData();
    };
    
    fetchData();
  }, []);


  console.log(HomeData.blogapi.records)
  

  return (<>

    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"></link>
    <Box sx={{ background: '#FCFCFC',justifyContent: 'center', alignItems: 'center', alignContent: 'center', width:'100%',maxWidth:'1400px' }}>
  <Typography variant="h1" sx={{ whiteSpace: 'break-spaces', textAlign: 'center', fontFamily: 'classicsans', fontWeight: 'bold', color: '#333333', fontSize: isSmallScreen ? '28px' : '45px', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '2rem' : (isMediumScreen ? '3rem' : (isLargeScreen ? '3rem' : (isExtraLargeScreen ? '3rem' : '3rem'))), mb: '0.5rem' }}>
    Teaching Resources
  </Typography>
  <Typography variant="subtitle2" sx={{ textAlign: 'center', whiteSpace: isMediumScreen ? 'balance' : 'break-spaces', fontFamily: 'classicsans', fontWeight: 'light', color: '#333333', fontSize: isSmallScreen ? '14px' : '20px' }}>
    Everything you need to get started: syllabus suggestions, role play ideas, facilitation tips, etc.
  </Typography>

  <Box sx={{ display: 'grid', gridTemplateColumns: isSmallScreen ? 'repeat(auto-fill, minmax(350px,1fr))' : (isMediumScreen ? 'repeat(auto-fill, minmax(250px,1fr))' : (isLargeScreen ? 'repeat(auto-fill, minmax(350px,1fr))' : (isExtraLargeScreen ? 'repeat(auto-fill, minmax(350px,1fr))' : 'repeat(auto-fill, minmax(350px,1fr))'))), gap: isSmallScreen ? '1rem' : '1.5rem', justifyContent: 'center', alignItems: 'center', alignContent: 'center', py: '2rem',px:'2rem', flexWrap: 'wrap',mt:'1rem' }}>
  {HomeData.blogs.list.map((item, index) => (
    <Box key={index} style={{ marginBottom: '2rem' }}>
      <Paper
        key={index}
        sx={{
          position:'relative',
          borderRadius: '16px',
          height: isSmallScreen ? '420px' : '420px',
          width: isSmallScreen ? '100%' : '100%',
        }}
      >
        <Link href={'/blog/recr6yzockQ1stYmP'} key={index}>
          
          <img src={item.imgUrl} alt={item.text}
            style={{
              width: '100%',
              height: '60%',
              objectFit: 'cover',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
            }}
          />
          <Box sx={{ p: '1rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography
              variant="body2"
              component="div"
              sx={{
                color: '#B34038',
                fontFamily: 'classicsans',
                fontWeight: "lighter",
                fontSize: isSmallScreen ? '10px' : '14px',            
              }}
            >
              {item.tag}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', pt: '0.75rem' }}>
            <Box sx={{ textAlign: "left", width: '100%', whiteSpace: 'break-spaces', p: '0' }}>
  {(item.text).length <= 60 ? (
    <Typography
      variant="body2"
      sx={{
        color: '#333333',
        fontFamily: 'classicsans',
        fontWeight: "bold",
        fontSize: isSmallScreen ? '12px' : '20px',
        textAlign: 'left',
        whiteSpace: 'break-spaces',
        overflow: 'visible',
      }}
    >
      {item.text}
    </Typography>
  ) : (
    <>
      <Typography
        variant="body2"
        sx={{
          color: '#333333',
          fontFamily: 'classicsans',
          fontWeight: "bold",
          fontSize: isSmallScreen ? '12px' : '20px',
          textAlign: 'left',
          whiteSpace: 'break-spaces',
          overflow: 'visible',
        }}
      >
        {item.text.slice(0, 30)}
      </Typography>
      <Tooltip title={item.text} arrow>
        <Typography
          variant="body2"
          sx={{
            color: '#333333',
            fontFamily: 'classicsans',
            fontWeight: "bold",
            fontSize: isSmallScreen ? '12px' : '20px',
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
           -{item.text.slice(30)}
        </Typography>
      </Tooltip>
    </>
  )}
</Box>
</Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', pt: '0.75rem' }}>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: '#4D4D4D',
                  fontFamily: 'classicsans',
                  fontWeight: 'lighter',
                  fontSize: '14px',
                  pl: '4px',
                  whiteSpace: 'pre-wrap' // or 'normal' depending on your preference
                }}
              >
                02 June, 2024
              </Typography>
            </Box>
          </Box>
        </Link>
      </Paper>
    </Box>
  ))}
</Box>

</Box>


    </>);
}
