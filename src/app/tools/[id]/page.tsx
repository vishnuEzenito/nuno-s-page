import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import ToolsData from "@/components/Tools/Data";
import useProductList from "@/lib/hooks";
import { useSearchParams } from "next/navigation";

export const generateStaticParams = async () => {
	const { fetchtoolsData } = useProductList();
	const data = await fetchtoolsData();
	if (!data) return [];
	const items = data
		.map((item) => {
			return item.items;
		})
		.flat();
	const slugs = items.map((item) => item.slug);
	return slugs.map((slug) => ({ id: slug }));
};

const getData = async (id: string) => {
	const { fetchToolData } = useProductList();
	const data = await fetchToolData(id as string);
	return data;
};
const ToolPage = async ({ params }: any) => {
	const toolData = await getData(params.id);
	return (
		<main>
			<NavBar activeComponent="/tools/:id" />
			<ToolsData id={params.id} toolData={toolData} />
			<Footer />
		</main>
	);
};

export default ToolPage;
