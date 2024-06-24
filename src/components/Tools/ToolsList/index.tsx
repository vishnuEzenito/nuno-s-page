import useProductList from "@/lib/hooks";
import { stylesConfig } from "@/lib/utils/functions";
import { FormControlLabel, Switch } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "../../../fonts/fonts.css";

import styles from "./styles.module.scss";
import { Tool, ToolId, ToolItem, ToolViewOption, ViewableItem } from "./types";

const classes = stylesConfig(styles, "tools-list");

export default function List() {
	const [activeTool, setActiveTool] = useState<ToolId>("negotiate");
	const [viewOption, setViewOption] = useState<ToolViewOption>("category");
	const { fetchtoolsData } = useProductList();
	const [tools, settools] = useState<Tool[] | null>(null);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const data: any = await fetchtoolsData();
			settools(data);
			setloading(false); // Set loading to false after data is fetched
		};
		fetchData();
	}, []);

	const getViewableItems = (
		activeToolId: ToolId,
		viewOption: ToolViewOption
	): Array<ViewableItem> => {
		const activeToolSection = tools?.find(
			(tool) => tool.id === activeToolId
		);
		if (!activeToolSection) return [];
		const activeItems = activeToolSection.items;
		let currentActiveKey: ToolViewOption = "category";
		if (viewOption === "category") {
			currentActiveKey = "category";
		} else {
			currentActiveKey = "useCase";
		}
		const blocks = new Map<string, Array<ToolItem>>();
		activeItems.forEach((item) => {
			if (blocks.has(item[currentActiveKey])) {
				let currentItems = blocks.get(item[currentActiveKey]);
				if (currentItems) {
					currentItems.push(item);
				} else {
					currentItems = [item];
				}
				blocks.set(item[currentActiveKey], currentItems);
			} else {
				blocks.set(item[currentActiveKey], [item]);
			}
		});
		const currentViewableItems = Array.from(blocks).map((block) => ({
			title: block[0],
			items: block[1],
		}));
		return currentViewableItems;
	};

	useEffect(() => {
		if (tools) {
			const initialViewableItems = getViewableItems(
				"negotiate",
				"category"
			);
			setViewableItems(initialViewableItems);
		}
	}, [tools]);

	const [viewableItems, setViewableItems] = useState<Array<ViewableItem>>([]);

	const switchViewOption = (updatedViewOption: ToolViewOption) => {
		setViewOption(updatedViewOption);
		const currentViewableItems = getViewableItems(
			activeTool,
			updatedViewOption
		);
		setViewableItems(currentViewableItems);
	};

	const switchTab = (updatedTool: ToolId) => {
		setActiveTool(updatedTool);
		const currentViewableItems = getViewableItems(updatedTool, viewOption);
		setViewableItems(currentViewableItems);
	};

	return (
		<section className={classes("")} id="tools">
			<link
				href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
				rel="stylesheet"
			/>
			<div className={classes("-header")}>
				<h1>Find the right tool</h1>
				<h3>
					to address your goals and challenges towards successful
					negotiation
				</h3>
			</div>
			{loading ? (
				<>Loading...</>
			) : (
				<>
					<div className={classes("-heading")}>
						<h1>
							{tools?.find((tool) => tool.id === activeTool)
								?.title ?? ""}
						</h1>
					</div>
					<div className={classes("-tabs")}>
						{tools?.map((tool) => (
							<button
								className={classes("-tab", {
									"-tab--active": tool.id === activeTool,
								})}
								style={{
									backgroundColor:
										tool.id === activeTool
											? tool.theme.background
											: "transparent",
								}}
								key={`tools-tab-${tool.id}`}
								onClick={() => {
									switchTab(tool.id);
								}}
							>
								<Image
									src={tool.icon}
									alt={tool.label}
									width={100}
									height={100}
								/>
								<h2>{tool.label}</h2>
							</button>
						))}
					</div>
					<div className={classes("-container")}>
						{viewableItems.map((block, index) => (
							<div
								className={classes("-block")}
								id={`tools-blocks-${block.title}`}
								key={`tools-blocks-${block.title}`}
							>
								<div className={classes("-block-head")}>
									<h3 style={{ fontWeight: "bold" }}>
										{block.title}
									</h3>
									{index === 0 ? (
										<FormControlLabel
											control={
												<Switch
													checked={
														viewOption === "useCase"
													}
													onChange={() => {
														switchViewOption(
															viewOption ===
																"category"
																? "useCase"
																: "category"
														);
													}}
												/>
											}
											label="Show by Use Case"
										/>
									) : (
										<span />
									)}
								</div>
								<div className={classes("-block-items")}>
									{block.items.map((item) => (
										<Link
											href={`tools/${item.slug}`}
											className={classes("-block-item")}
											key={`tools-blocks-${block.title}-item-${item.slug}`}
										>
											<Image
												src={item.icon}
												alt={item.text}
												width={100}
												height={100}
											/>
											<div
												className={classes(
													"-block-item__content"
												)}
											>
												<h3>{item.text}</h3>
												<button>
													<MdOutlineArrowOutward />
												</button>
											</div>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</>
			)}
		</section>
	);
}
