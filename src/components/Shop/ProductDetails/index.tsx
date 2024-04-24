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
  IconButton,
  Button,
  ButtonBase,
  Stack,
  Skeleton,
  Tooltip,
  Chip,
  Avatar,
  Divider,
  Modal,
  TextField,Alert,AlertTitle
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {ChevronDown,ChevronRight,Star,X} from 'react-feather';
import Loading from './loading';
import Link from "next/link";
import { useFormspark } from "@formspark/use-formspark";
const FORMSPARK_FORM_ID = "r4j5MQIsd";

interface ProductDetailsProps {
  productId: string;
}

export default function ProductDetails({ productId }: ProductDetailsProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const { productList, fetchData } = useProductList();
  const [productData, setData] = useState();
  const [similarProduct, setSmiliarProduct] = useState([]); 
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const[formLoading,setFormLoading] = useState(true);

  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [quanity,setQuantity] = useState("");
  const [serialNumber, setserialNumber] = useState("");
  const [productName, setProductName] = useState("");


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const status = await submit({ email,name,serialNumber,productName,quanity});
    console.log(status,submitting)
    setFormLoading(false);
    
  };

  
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData();
      // @ts-ignore
      const product = result.records.find((product: ProductDetailsProps) => product.id === productId);
      // @ts-ignore
      const filteredProducts = result.records.filter((item: ProductDetailsProps) => item.fields.serialNumber === product.fields.serialNumber && item.id !== product.id );
      setSmiliarProduct(filteredProducts);
      setData(product);
      setLoading(false);
    };
    fetchDataFromApi();
  }, []);

  const handleImageLoad = (index: number) => {
    setImageLoaded(prevState => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <>
        <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet" />
        <Box sx={{ background:'#F9FBF9',pb:'2rem',width:'100%', height: 'auto',px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), mt: isSmallScreen ? '4rem' : (isMediumScreen ? '2rem' : (isLargeScreen ? '2rem' : (isExtraLargeScreen ? '2rem' : '2rem')))}}>
            {loading ? (
          <Loading/>
      ) : productData ? (<>
        <Grid container spacing={{ xs:1, md:1, xl: 4 }} gap={{xs:0,md:4,lg:12,xl:12}} sx={{flexWrap: 'wrap'}}>

        <Grid item key={'text'} xs={12} md={4} lg={4} sx={{my:'12%'}}>
          <Paper sx={{borderRadius:'16px'}}>
       {/* @ts-ignore */}
      <img src={productData.fields.Image[0].url}
      alt='bgimage'
      style={{
      width: '100%',
      height: '100%',
      objectFit:'contain',
      borderRadius:'16px'
      }}
      /> 
      </Paper>
      </Grid>

      <Grid item key={'text'} xs={12} md={5.5} lg={5.5} sx={{my:isSmallScreen?'0rem':'12%',display:'flex',flexDirection:'column',alignItems:'start'}}>
      <Typography variant="h1" sx={{ textAlign:'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '36px' }}>
      {/* @ts-ignore */}
      {productData.fields.productName}
      </Typography>
          <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',textAlign:'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px', mt:"0.5rem", }}>
          {/* @ts-ignore */}
          {productData.fields.Description}            
          </Typography>

          <Box sx={{ maxHeight: '100%', flexWrap:'wrap', flexDirection: 'row', gap: '1rem',mt:'1rem'}}>
           {/* @ts-ignore */}
            {productData.fields.sustainabilityAttributes.map((item, index) => (
              <Chip
                key={index} 
                avatar={<Avatar alt="icon" src="/ecoicon.png" />}
                label={item}
                disabled={false}
                size='medium'
                variant="filled"
                sx={{
                  color: '#8A8A89',
                  background: '#EBF3E8',
                  fontFamily: 'CircularStd, sans-serif',
                  fontWeight: 100,
                  fontSize: '12px',
                  marginRight: '0.5rem',
                  mb:'1rem'

                }}
              />
            ))}
          </Box>
        <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
        <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',textAlign:'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px', mt:"0.5rem", }}>
              Package Size
          </Typography>
          <Paper elevation={0} sx={{
                borderRadius: '100px',
                background:'#EBF3E8',                
                width:'100px',
                px:'2rem',
                py:'0.4rem',
                border: '1px solid #D2E3C8',
                mt:'1rem',
                }}>
                <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#8A8A89',fontSize:'16px',py:'0.1rem'}}>
               {/* @ts-ignore */}
                {productData.fields["Quantity "]}
                </Typography>
              </Paper>
              <Divider sx={{color:'E5E7EB',pt:'0.5rem',pb:'1rem'}}/>
              <Typography variant="h1" sx={{mt:'1rem',textAlign:'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '24px' : '28px' }}>
              {/* @ts-ignore */}
              ₹{productData.fields.Price}
      </Typography>
        </Box>


          <ButtonBase onClick={handleOpenModal}  sx={{
                mt:'2rem',
                borderRadius: '100px',
                width:'auto'}}>
        <Paper sx={{
                borderRadius: '100px',
                background:'#739072',
                width:'auto',
                px:'2rem',
                py:'0.4rem',
                mb:'1rem'
                }}>
                <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#fff',fontSize:'18px',py:'0.43rem',}}>
                Enquire Now
                </Typography>
              </Paper>
              </ButtonBase>

              <Accordion elevation={0} sx={{background:'#F9FBF9',borderBottom: '1px solid #E5E7EB', borderTop: '0.5px solid #E5E7EB', py:'0.5rem',mt:'1rem', width:'100%'}}>
        <AccordionSummary
          expandIcon={<ChevronDown color='#8A8A89' />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '12px' : '16px'}}>Additional Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="subtitle2" sx={{whiteSpace: isMediumScreen?'balance':'break-spaces',textAlign:'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px', mt:"0.5rem", }}>
          {/* @ts-ignore */}
          {productData.fields.Notes}            
          </Typography>
        <Typography sx={{fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px',mt:'0.5rem'}}>
          {/* @ts-ignore */}

            Category: {productData.fields.category}
          </Typography>
  
          <Typography sx={{fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px',mt:'0.5rem'}}>
                {/* @ts-ignore */}
            Supplier Name: {productData.fields.supplierName}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isSmallScreen?'90%':'70%',
            height:isSmallScreen?'70%':'70%',
            maxWidth:'590px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius:'18px',
            p: 4,
          }}
        >
          <Box sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
          <IconButton
          onClick={handleCloseModal}        
          style={{ background:'#EBF4E8',height:'35px',width:'35px',marginRight:'1px'}}
        >
        <X color='#739072' size='20px'/>
        </IconButton>
          </Box>
      <Typography variant="h1" sx={{ textAlign:'left',fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '20px' : '28px' }}>
          {/* @ts-ignore */}
      {productData.fields.productName}
      </Typography>
          <Box component="form" autoComplete="on" onSubmit={onSubmit} sx={{ width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
      alignItems:'left',
      gap: '0.75rem',
      py:'1rem'}}>

        <Box sx={{width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      alignItems:'left',
      gap: '0.75rem',}}>
        <Typography sx={{fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color: '#8A8A89', fontSize: isSmallScreen ? '14px' : '16px',mt:'1rem'}}>
          {/* @ts-ignore */}
          pack of {productData.fields["Quantity "]} X
          </Typography>
           {/* @ts-ignore */}
          <TextField name="quanity" id="quanity" placeholder="Quanity" type='number' required sx={{background:'#F9FBF9',borderRadius:'8px',width:'50%'}} onChange={(e) => setQuantity(`pack of ${productData.fields["Quantity "]} X ${e.target.value}`)}/>

        </Box>
      <TextField
          id="name"
          placeholder="Name"
          name="name"
          required
          type='name'
          sx={{background:'#F9FBF9',borderRadius:'8px',width:'100%'}}
          onChange={(e) => setName(e.target.value)}

        />
      <TextField
          name="email"
          placeholder="Email"
          required
          id="email"
          type='email'
          sx={{background:'#F9FBF9',borderRadius:'8px',width:'100%'}}
          onChange={(e) => setEmail(e.target.value)}

        />
        {formLoading?(
         <ButtonBase
         type="submit"
         disabled={submitting}
         onClick={() => {
          {/* @ts-ignore */}
          setserialNumber(productData.fields.serialNumber);
          {/* @ts-ignore */}
          setProductName(productData.fields.productName);
        }}
         sx={{
          mt:'2rem',
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
      
     ):(<Alert variant="filled" severity="success" sx={{width:'100%', background:'#4F6F52'}}>
        <AlertTitle>Success</AlertTitle>
        Thanks for sumbmiting!
      </Alert>
)
        }

    </Box>
        </Box>
        
      </Modal>
      </> 
      ) : null}
     </Box>
     {similarProduct.length !== 0 ? (<>    
    <Box sx={{ pt:isSmallScreen ? '1rem' : '2rem', pb: '2rem', width: '100%', px: isSmallScreen ? '1.25rem' : (isMediumScreen ? '4.5rem' : (isLargeScreen ? '4.5rem' : (isExtraLargeScreen ? '5.5rem' : '4.5rem'))), background: '#fff'}}>
     <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
     <Typography variant="h1" sx={{ textAlign: 'left', fontFamily: 'CircularStd, sans-serif', fontWeight: 500, color: '#5B5B5B', fontSize: isSmallScreen ? '28px' : '36px' }}>
          Similar Products
        </Typography>
        <Box sx={{ display:'flex',justifyContent:"left",flexDirection:'row',alignItems:"center",alignContent:'center',gap:isSmallScreen ? '1rem': '1.5rem', py: '2rem', pl: '0',flexWrap: 'wrap' }}>

        {
          similarProduct.map((item, index) => (
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
            </Paper>
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
                    {/* @ts-ignore */}
                    {item.fields.Price !== 0 ? (
            <Box sx={{display:'flex',flexDirection:'row',width:'100%',pt:'0.75rem'}}>          
              <Box sx={{ textAlign:"left", width: '50%',whiteSpace:'break-spaces',p:'0'}}>
                <Typography 
                  variant="body2" 
                  component="div" 
                  sx={{ 
                    color: '#494949', 
                    fontFamily: 'CircularStd, sans-serif', 
                    fontWeight: 400,
                    fontSize: isSmallScreen?'16px':'20px',
                  }}
                >
                  {/* @ts-ignore */}
                  ₹{item.fields.Price}
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
          ) : (
        <ButtonBase 
                  sx={{
                        borderRadius: '100px',
                        width:'auto',
                        }}>
                <Paper 
                        elevation={0}
                        sx={{
                        borderRadius: '100px',
                        background:'#fff',
                        width:'auto',
                        px:isSmallScreen?'0.5rem':'2rem',
                        py:'0.4rem',
                        }}>
                        <Typography variant="body2" sx={{ whiteSpace:'break-spaces',textAlign:'center',fontFamily: 'CircularStd, sans-serif', fontWeight: 100, color:'#545454',fontSize:isSmallScreen?'12px':'16px',py:'0.2rem'}}>
                        Enquire for price              
                        </Typography>
                      </Paper>
                      </ButtonBase>  )}
                    </Box>
                  </Box>
                  </Link>
            </Paper>
          ))

        }
      </Box>
    </Box>
    </Box> </>) : null}


    </>
  );
}
