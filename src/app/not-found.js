"use client";
import React, { useEffect } from 'react';
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import gif from '../../public/assets/404.json'; 
import Link from "next/link";

import useProductList from '@/lib/hooks'



export default function Home() {
	
	return (
		<main>
			<div className="" />
			<NavBar activeComponent="/" />
			<Box component="section" id="cta" sx={{height:'100vh'}}>
			<div style={{ textAlign: 'center', padding: '50px' }}>
      <Lottie
		animationData={gif} loop={true}        
        style={{ height:'auto', width: '50%', margin: '0 auto' }}
      />
      <Typography variant="h1" component="h2">
               404
                </Typography>

				<Typography variant="h6" sx={{mt:'1rem'}}>
				Oops! The page you are looking for does not exist.
			</Typography>

    </div>
			</Box>
			<Box component="section" id="footer">
				<Footer />
			</Box>
		</main>
	);
}