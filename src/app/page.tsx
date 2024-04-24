'use client'

import Footer from "@/components/Footer";
import { CTA, Category, Hero, WhyChooseUs, SellOnAllMatter } from "@/components/Home";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { Box } from '@mui/material';


export default function Home() {
  
  return (
    <main>
      <div className="" />
      <NavBar activeComponent="/" />
      <Hero />
      {/* WhyChooseUs and CTA sections */}
      <WhyChooseUs />
      <CTA />
      <SellOnAllMatter/>
      <Box component="section" id="footer">
        <Footer />
      </Box>
    </main>
  );
}
