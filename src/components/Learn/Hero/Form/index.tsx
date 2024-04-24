// components/HeroCarousel.js

import React,{useEffect,useState} from 'react';
import { Button, Typography, Grid,Box,Paper,TextField,Alert,AlertTitle } from '@mui/material';
import { useFormspark } from "@formspark/use-formspark";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




const FORMSPARK_FORM_ID = "gZHspFHQt";

const SellerForm = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const[loading,setLoading] = useState(true)

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const status = await submit({ email,name,phone,message});
    console.log(status,submitting)
    setLoading(false);
    
  };

  return (<>

    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"></link>
        
        <Box component="form" autoComplete="on" onSubmit={onSubmit}>
      <Paper sx={{
      width: '100%',
      height: '100%',
      background: 'rgb(15, 15, 15, 0.2)',
      backdropFilter: "blur(25px)",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      p: '2rem',
      gap: '0.75rem',
      borderRadius: '18px'
    }}>
      
      <TextField
          id="name"
          placeholder="Name"
          name="name"
          required
          type='name'
          sx={{background:'#fff',borderRadius:'8px',width:'100%'}}
          onChange={(e) => setName(e.target.value)}

        />
      <TextField
          name="email"
          placeholder="Email"
          required
          id="email"
          type='email'
          sx={{background:'#fff',borderRadius:'8px',width:'100%'}}
          onChange={(e) => setEmail(e.target.value)}

        />

      <TextField name="number" id="number" placeholder="Phone Number" type='phone' required sx={{background:'#fff',borderRadius:'8px',width:'100%'}} onChange={(e) => setPhone(e.target.value)}
/>

      <TextField
          id="message"
          name="message"
          label=""
          multiline
          rows={4}
          placeholder="Details of the products you want to sell. We will get back to you with the registration documents."
          defaultValue=""
          sx={{background:'#fff',borderRadius:'8px',width:'100%'}}
          onChange={(e) => setMessage(e.target.value)}
        />
        {loading?(<Button
        variant="outlined"
        type="submit"
        disabled={submitting}
        sx={{
          mt: '1.5rem',
          color: '#fff',
          borderRadius: '100px',
          textTransform: "none",
          maxWidth:'250px',
          borderColor: '#fff',
          fontSize: '16px',
          fontFamily: 'CircularStd, sans-serif',
          fontWeight: '100',
          px: '2rem',
          py: '0.5rem',
          '&:hover': {
            borderColor: '#FFF',
            background: '#FFF',
            color: '#272F0F',
          }
        }}
      >
        Register as a Seller
      </Button>):(<Alert variant="filled" severity="success" sx={{width:'100%', background:'#4F6F52'}}>
        <AlertTitle>Success</AlertTitle>
        Thanks for sumbmiting!
      </Alert>
)
        }
    </Paper>

    </Box>
    </>);
};

export default SellerForm;
