import Image from "next/image";
import { Typography, useMediaQuery, useTheme, Box, Paper, ButtonBase, Toolbar, Grid } from '@mui/material';
import useProductList from "@/lib/hooks";
import Tooltip from '@mui/material/Tooltip';
import Loading from './loading';
import Skeleton from '@mui/material/Skeleton';
import React, { useEffect, useState, Suspense } from "react";
import {ChevronRight,Star} from 'react-feather';
import Link from "next/link";

interface params {
  keyword: string;
}

export default function Store({keyword}:params) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [data, setData] = useState({records:[]});
  const [title, setTitle] = useState('Featured Products');
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const {fetchData} = useProductList();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      {/* @ts-ignore */}
      let result = await fetchData();
      
      if (keyword) {
        {/* @ts-ignore */}
        result = result.records.filter(item =>
          item.fields.productName.toLowerCase().includes(keyword.toLowerCase())
        );
        setData({records:result});
        setTitle(`Results for '${keyword}'`)
        console.log('search',result);

      }
      else {
        // Fetch all data
        console.log('nosearch');
        setTitle('Featured Products')
        setData(result);
      }

      setLoading(false);
    };

    fetchDataFromApi();
  }, [keyword]);

  const handleImageLoad = (index: number) => {
    setImageLoaded(prevState => ({
      ...prevState,
      [index]: true,
    }));
  };



  return (
    <>
      <Box sx={{ pt: isSmallScreen ? '231px' : '231px', pb: '2rem', width: '100%', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), background: '#F9FBF9'}}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <Typography variant="h1" sx={{ textAlign: 'left', fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '36px' }}>
          {title}
        </Typography>
        <Box sx={{ display:'flex',justifyContent:"center",alignItems:"center",alignContent:'center',gap:isSmallScreen ? '1rem': '1.5rem', py: '2rem', pl: '0',flexWrap: 'wrap' }}>
        {loading ? (
            Array.from({ length: 20 }).map((_, index) => (
              <Loading key={index} />
            ))
          ) : (
            data.records.map((item, index) => (
              <Paper
                key={index}
                sx={{
                  position:'relative',
                  borderRadius: '16px',
                  height: isSmallScreen ? '100%' : '100%',
                  width: isSmallScreen ? '47.5%' : '220px',
                }}
              >
                {/* @ts-ignore */}
             <Link href={`/shop/${item.id}`} key={index}>
              {/* @ts-ignore */}
             {item.fields["Promotional Tags "] !== 'none' ? (<>
              <Paper
                elevation={0}
                sx={{
                  position:'absolute',
                  borderRadius: '100px',
                  top:0,
                  height: isSmallScreen ? 'auto' : 'auto',
                  width: isSmallScreen ? 'auto' : 'auto',
                  m:'1rem',
                  background:'#EE846E'
                }}
              >   
              <Typography 
                          variant="body2" 
                          component="div" 
                          sx={{ 
                            color: '#fff', 
                            fontFamily: 'CircularStd, sans-serif', 
                            fontWeight: 400,
                            fontSize: isSmallScreen?'10px':'12px',
                            px:'0.8rem',
                            py:'0.41rem'
                          }}
                        >
                          {/* @ts-ignore */}
                         {item.fields["Promotional Tags "]}
                        </Typography>
              </Paper> </>) : null}

              {!imageLoaded[index] && <Skeleton variant="rounded" style={{ width: isSmallScreen ? '100%' : '220px', height: '215px', borderTopLeftRadius:'16px', borderTopRightRadius:'16px',}}/>}
           {/* @ts-ignore */}
          <img src={item.fields.Image[0].url} alt={item.fields.productName}
            style={{
              width: '100%',
              height: '60%',
              objectFit: 'cover',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
              display: imageLoaded[index] ? 'block' : 'none',
            }}
            onLoad={() => handleImageLoad(index)}
          />
                <Box sx={{ p: '1rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* @ts-ignore */}
                <Tooltip title={item.fields.productName} arrow>
          
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#040404',
                      fontFamily: 'CircularStd, sans-serif',
                      fontWeight: 400,
                      fontSize: isSmallScreen ? '12px' : '16px',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {/* @ts-ignore */}
                    {item.fields.productName}
                  </Typography>
                  </Tooltip>
          
          
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
                          {/* @ts-ignore */}
                          pack of {item.fields["Quantity "]}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign:"end", width: '20%',whiteSpace:'break-spaces',p:'0', display:'flex',flexDirection:'row-reverse'}}>
                        <Typography 
                          variant="body2" 
                          component="div" 
                          sx={{ 
                            color: '#545454', 
                            fontFamily: 'CircularStd, sans-serif', 
                            fontWeight: 400,
                            fontSize: '14px',
                            pl:'4px'
                          }}
                        >
                          {/* @ts-ignore */}
                          {item.fields["Rating "]}
                        </Typography>
                        <Star color='#FFDF34' fill="#FFDF34" size={10} style={{marginTop:'4px'}}/>
                      </Box>
                      </Box>
                      <Box sx={{display:'flex',flexDirection:'row',width:'100%',pt:'0.75rem'}}>          
                      
                   
              <Box sx={{display:'flex',flexDirection:'row',width:'100%',pt:'0.75rem'}}>          
                <Box sx={{ textAlign:"left", width: '50%',whiteSpace:'break-spaces',p:'0'}}>
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
                      fontSize: '12px',
                      pl:'4px'
                    }}
                  >
                    View Details
                  </Typography>
                </Box>
              </Box>
            
                      </Box>
                    </Box>
                    </Link>
              </Paper>
            ))
          )}

 
</Box>
</Box>        
      </Box>
    </>
  );
}