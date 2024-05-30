'use client'

import Footer from "@/components/Footer";
import { Hero,Blogs} from "@/components/Author";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { Box } from '@mui/material';


export default function SellonAllMattr() {
  
  return (
    <main>
      <div className="" />
      <NavBar activeComponent="/author" />
      <Box component="section" id="signup">
      <Hero />
      </Box>
      <Box sx={{background:'#FCFCFC',display:'flex',justifyContent:"center",width:'100%',px:'1rem',mb:'4rem'}}>
       <Blogs/>
      </Box>
      <Box component="section" id="footer">
        <Footer />
      </Box>
    </main>
  );
}
