"use client";
import React, { useEffect } from 'react';
import Footer from "@/components/Footer";
import { CTA, Hero, SellOnAllMatter, WhyChooseUs } from "@/components/Home";
import NavBar from "@/components/Navbar";
import { Box } from "@mui/material";
import useProductList from '@/lib/hooks'



export default function Home() {
	const { fetchBookData,fetchAssessmentData,fetchBlogData,fetchtoolsData,fetchCanvasData} = useProductList();

  useEffect(() => {
    const fetchData = async () => {
      await fetchBookData();
	  await fetchAssessmentData();
	  await fetchBlogData();
	  await fetchtoolsData();
	  await fetchCanvasData();
    };
    fetchData();
  }, []);
	
	return (
		<main>
			<div className="" />
			<NavBar activeComponent="/" />
			<Hero />
			<Box component="section" id="knowmore">
			<WhyChooseUs />
			</Box>
			<Box component="section" id="cta">
			<CTA />
			</Box>
			<SellOnAllMatter />
			<Box component="section" id="footer">
				<Footer />
			</Box>
		</main>
	);
}
