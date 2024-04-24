import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  useMediaQuery,
  useTheme,
  Box,
  Paper,
  InputBase,
} from "@mui/material";
import { Search,ChevronDown,Sliders } from 'react-feather';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { RxCross2 } from "react-icons/rx";
import { Console } from "console";



interface NavBarProps {
  activeComponent: string;
  backgroundColor: string;
  logo: string;
  menuColor: string;
  handleSearch: (query: string) => void; // Add handleSearch prop

}

export default function NavBar({ activeComponent,backgroundColor,logo,menuColor,handleSearch}: NavBarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [keyWord, setKeyWord] = React.useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const searchFunction = async () => {
    handleSearch(keyWord);
  };
  


  const menuItems = [
    {
      id: 0,
      icon: <ShoppingCartIcon />,
      title: "Shop",
      url: "/shop",
    },
    {
      id: 1,
      icon: <BusinessIcon />,
      title: "About",
      url: "/about",
    },
    {
      id: 2,
      icon: <PhoneIcon />,
      title: "Contact Us",
      url: "#footer",
    },
    {
      id: 3,
      icon: <StorefrontIcon />,
      title: "Sell on All Mattr",
      url: "sellonallmattr",
    },
  ];

  return (<>
    <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet"></link>
    <AppBar
      elevation={1}
      sx={{
        background: `${backgroundColor}`,
        backdropFilter: "blur(10px)",
        top: 0,
        pt:'0.5rem',
        pb:'0.75rem',
        borderBottomRightRadius:'12px',
        borderBottomLeftRadius:'12px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',

      }}
    >
      <Toolbar sx={{p:'0.5rem',mx: isMobile ? '1rem' : (isMediumScreen ? '3.5rem' :  (isLargeScreen ? '3.5rem' :(isExtraLargeScreen ? '4.5rem' : '3.5rem'))),}}>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuRoundedIcon sx={{height:'40px',width:'40px',color:'rgb(246, 246, 246,0.65)'}}/>
          </IconButton>
        )}
        <Drawer
          anchor="left"
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          sx={{
            width: '80%', // Adjust the width of the Drawer as needed
            flexShrink: 0, // Fix for IE 11
            '& .MuiDrawer-paper': {
              width: '80%', // Adjust the width of the Drawer paper as needed
              boxSizing: 'border-box',
            },
          }}
        
        >
         
          <List sx={{px:'1rem'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,display: 'flex', flexDirection:'column' , justifyContent: 'center', alignItems: 'center',textAlign:"center",mb:'2rem' }}>
          <Image src={"/darklogo.png"} width={100} height={75} alt="logo" />
        </Typography>
            {menuItems.map((item) => (
              <ListItem button key={item.id}>
                <ListItemIcon sx={{height:'24px',width:'24px'}}>{item.icon}</ListItemIcon>
                <Link href={item.url}>
                  <ListItemText primary={item.title} sx={{ '& .css-10hburv-MuiTypography-root':{fontFamily: 'CircularStd, sans-serif', fontWeight: 400,fontSize:"20px",}}}/>
                </Link>
              </ListItem>
            ))}
          </List>
       

        </Drawer>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: isMobile? "25%" : "0rem" }}>
        <Link href={'/'}>
          <Image src={logo} width={100} height={75} alt="logo" />
          </Link>
        </Typography>
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "16px" }}>
            {menuItems.map((item) => (
              <Link href={item.url} key={item.id}>
                <Button color="inherit" sx={{px:'1.5rem',textTransform :"none", fontSize: '16px', fontWeight:'400', color:`${menuColor}`}}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
      <Box sx={{ width:'100%',py:'0.5rem',px: isMobile ? '1.25rem' : (isMediumScreen ? '4.5rem' :  (isLargeScreen ? '4.5rem' :(isExtraLargeScreen ? '5.5rem' : '4.5rem'))), borderTop: '1px solid rgba(115, 144, 114,0.3)',mt:'0.5rem'}}>
      
  <Grid container spacing={{ xs:2, md:2, xl: 2 }} sx={{}}>
      <Grid item key={'menu'} xs={12} md={7} lg={7} gap={{}} sx={{}}>
      <Paper
      component="form"
      sx={{mt:'1rem',display: 'flex', alignItems: 'center', width: "100%", pl:'1.5rem',pr:'1rem', height:'55px',
      borderRadius: '100px',background:'#F3F8F1', stroke:'#EBF3E8',strokeWidth:'1px' }}
      elevation={0}

    >

      
      <InputBase
        sx={{ flex: 1,pr:'1rem',
          color:'#607274',
          '& input::placeholder':   {
          fontSize: "16px",
          fontWeight:"100",
          color:'#86A789',
          mt:"1px",
                  },

                }}
        placeholder="Search products...."
        onChange={event=>{setKeyWord(event.target.value)}}
        onKeyPress={(event) => {
          if(event.key === 'Enter'){
            searchFunction()
            event.preventDefault();
          }
        }}
        value={keyWord}
      />
    
    <IconButton onClick={ () => searchFunction() } type="button" sx={{ py: '10px' }} aria-label="search">
            <Search color="#739072" size='24px' />
      </IconButton>
      
    </Paper>  
      </Grid>
  </Grid>
    </Box>
    </AppBar>
      </>);
}
