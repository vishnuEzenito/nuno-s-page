import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import useProductList from "@/lib/hooks";
import Image from "next/image";
import { LuBox } from "react-icons/lu";

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
			<section className="w-full flex justify-start items-start flex-col gap-2 px-4 sm:px-[7%] py-8">
				{toolData ? (
					<>
						<div className="jumbotron w-full flex justify-start items-center gap-2 p-8 rounded-xl shadow-xl">
							<Image
								src={toolData.icon?.[0]?.url}
								alt={toolData.icon?.[0]?.filename}
								width={toolData.icon?.[0]?.width}
								height={toolData.icon?.[0]?.height}
							/>
							<div className="jumbo-content w-1/2 flex justify-center items-start flex-col gap-4">
								<h1>{toolData?.Toolname}</h1>
								<hr className="h-1 w-full bg-[#E3E3E3]" />
								<span className="flex justify-start items-center gap-2">
									<LuBox /> {toolData.category}
								</span>
								<span>Use Case: {toolData.useCase}</span>
							</div>
						</div>
						{/* toolData.oneLineSummary ? (
							<div className="section w-full flex justify-center items-start flex-col gap-4 py-4">
								<h2>Summary</h2>
								<p>{toolData.oneLineSummary}</p>
							</div>
						) : null */}
						{toolData.purpose ? (
							<div className="section w-full flex justify-center items-start flex-col gap-4 py-4">
								<h2
									style={{
										fontSize: "1.25rem",
										fontWeight: "bold",
									}}
								>
									Purpose
								</h2>
								<p>{toolData.purpose}</p>
							</div>
						) : null}
						{toolData.whenToUse ? (
							<div className="section flex justify-center items-start flex-col gap-4 py-4">
								<h2
									style={{
										fontSize: "1.25rem",
										fontWeight: "bold",
									}}
								>
									When to Use
								</h2>
								<p>{toolData.whenToUse}</p>
							</div>
						) : null}
						{toolData.references ? (
							<div className="section flex justify-center items-start flex-col gap-4 py-4">
								<h2
									style={{
										fontSize: "1.25rem",
										fontWeight: "bold",
									}}
								>
									References
								</h2>
								<p>{toolData.references}</p>
							</div>
						) : null}
					</>
				) : null}
			</section>
			<Footer />
		</main>
	);
};

export default ToolPage;
