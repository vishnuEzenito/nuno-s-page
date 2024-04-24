"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Hero, List } from "@/components/Tools";
import { Box } from "@mui/material";

export default function SellonAllMattr() {
	return (
		<main>
			<div className="" />
			<NavBar activeComponent="/tools" />
			<Box component="section" id="signup">
				<Hero />
			</Box>
			<List />
			<Box component="section" id="footer">
				<Footer />
			</Box>
		</main>
	);
}
