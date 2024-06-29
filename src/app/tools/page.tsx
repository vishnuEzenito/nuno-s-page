import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Hero, List } from "@/components/Tools";
import useProductList from "@/lib/hooks";
import { Box } from "@mui/material";

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
			<List tools={allTools} />
			<Box component="section" id="footer">
				<Footer />
			</Box>
		</main>
	);
}
