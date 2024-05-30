'use client'

import Footer from "@/components/Footer";
import { Hero,Canvas,Assessments,Books } from "@/components/Learn";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { Box } from '@mui/material';


export default function SellonAllMattr() {
  
  return (
    <main>
      <div className="" />
      <NavBar activeComponent="/learn" />
      <Box component="section" id="signup">
      <Hero />
      <Box sx={{ overflowX: 'hidden', whiteSpace: 'nowrap',background:'#FCFCFC',mb:'2rem' }}>
        <Canvas />
      </Box>
      <Box sx={{ overflowX: 'hidden', whiteSpace: 'nowrap',background:'#FFFFFF',mb:'2rem' }}>
        <Assessments />
      </Box>
      <Box sx={{ overflowX: 'hidden', whiteSpace: 'nowrap',background:'#FCFCFC',mb:'2rem' }}>
        <Books />
      </Box>
      </Box>
      <Box component="section" id="footer">
        <Footer />
      </Box>
    </main>
  );
}
