import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Hero, List } from "@/components/Tools";
import useProductList from "@/lib/hooks";
import { Box } from "@mui/material";
import { Suspense } from "react";

const getData = async () => {
	const { fetchtoolsData } = useProductList();
	const data = await fetchtoolsData();
	if (!data) return [];
	return data;
};

export default async function AllToolsPage() {
	const allTools = await getData();
	return (
		<main>
			<div className="" />
			<NavBar activeComponent="/tools" />
			<Box component="section" id="signup">
				<Hero />
			</Box>
			<Suspense>
				<List tools={allTools} />
			</Suspense>
			<Box component="section" id="footer">
				<Footer />
			</Box>
		</main>
	);
}
