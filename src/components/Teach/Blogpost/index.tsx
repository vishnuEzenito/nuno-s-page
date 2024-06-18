"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { HomeData } from "@/lib/constants";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { remark } from "remark";
import html from "remark-html";
import Skeleton from "@mui/material/Skeleton";
import "../../../fonts/fonts.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useProductList from "@/lib/hooks";

const markdownToHtml = async (markdown: any) => {
	const result = await remark().use(html).process(markdown);
	return result.toString();
};

interface CustomComponentProps {
	node: Node;
	children: React.ReactNode;
	[key: string]: any;
}

interface PostDetails {
	postId: string;
}

interface PostData {
	id: string;
	fields: {
		Date: string;
		Content: string;
		Title: string;
		AuthorName: string;
		Category: string;
	};
}

export default function BlogPost({ postId }: PostDetails) {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [loading, setLoading] = useState(true);
	const [blogPostData, setBlogPostData] = useState<any>(
		HomeData.blogapi.records
	);
	const scrollContainerRef = useRef(null);
	const { fetchBlogData } = useProductList();

	const customMarkdownComponents = {
		span: ({ node, ...props }: CustomComponentProps) => (
			<span style={{ fontWeight: "bold" }} {...props} />
		),
		li: ({ node, ...props }: CustomComponentProps) => {
			const childrenArray = React.Children.toArray(props.children);
			const firstChild = childrenArray[0];

			let isTaskListItem = false;
			let checked = false;

			if (
				React.isValidElement(firstChild) &&
				typeof firstChild.props.children === "string"
			) {
				const text = (firstChild.props.children as string).trim();
				if (
					text.startsWith("[ ]") ||
					text.startsWith("[x]") ||
					text.startsWith("[X]")
				) {
					isTaskListItem = true;
					checked = text[1] === "x" || text[1] === "X";

					childrenArray[0] = React.cloneElement(firstChild, {
						children: (firstChild.props.children as string)
							.slice(3)
							.trim(),
					} as any);
				}
			}

			return (
				<li
					style={{
						marginTop: "0.5rem",
						lineHeight: "1.5",
						marginLeft: "1rem",
						listStyleType: isTaskListItem ? "none" : "disc",
					}}
				>
					{isTaskListItem && (
						<input
							type="checkbox"
							checked={checked}
							readOnly
							style={{ marginRight: "0.5rem" }}
						/>
					)}
					{childrenArray}
				</li>
			);
		},
		blockquote: ({ node, ...props }: CustomComponentProps) => (
			<blockquote
				style={{
					borderLeft: "5px solid #ccc",
					paddingLeft: "1rem",
					marginTop: "1rem",
				}}
				{...props}
			/>
		),
		a: ({ node, ...props }: CustomComponentProps) => (
			<a
				style={{ color: "blue", textDecoration: "underline" }}
				{...props}
			/>
		),
		code: ({ node, ...props }: CustomComponentProps) => (
			<code
				style={{
					display: "block",
					whiteSpace: "pre-wrap",
					backgroundColor: "#f4f4f4",
					borderRadius: "0.25rem",
					padding: "0.5rem",
					margin: "1rem 0",
					overflowX: "auto",
				}}
				{...props}
			/>
		),
	};

	useEffect(() => {
		const fetchData = async () => {
			if (blogPostData === null) {
				const data = await fetchBlogData();
				const post = data.records.find(
					(item: any) => item.id === postId
				);
				if (post) {
					setBlogPostData(post);
				}
				setLoading(false);
			} else {
				const post = (HomeData.blogapi.records as any).find(
					(item: any) => item.id === postId
				);
				if (post) {
					setBlogPostData(post);
				}
				setLoading(false);
			}
		};

		fetchData();
	}, [postId, blogPostData, fetchBlogData]);

	const formatDate = (dateStr: string) => {
		const dateObj = new Date(dateStr);
		const options = { day: "numeric", month: "long", year: "numeric" };

		return dateObj.toLocaleDateString("en-GB", options as any);
	};

	return (
		<>
			{loading ? (
				<>
					<Box
						sx={{
							background: "#F4F4F4",
							justifyContent: "left",
							alignItems: "left",
							alignContent: "left",
							width: "100%",
							height: "100%",
							px: isSmallScreen
								? "1.25rem"
								: isMediumScreen
									? "4.5rem"
									: isLargeScreen
										? "4.5rem"
										: isExtraLargeScreen
											? "5.5rem"
											: "4.5rem",
							pb: isSmallScreen
								? "2.5rem"
								: isMediumScreen
									? "3rem"
									: isLargeScreen
										? "4rem"
										: isExtraLargeScreen
											? "4rem"
											: "4rem",
						}}
					>
						<Box
							sx={{
								pt: isSmallScreen
									? "2rem"
									: isMediumScreen
										? "3rem"
										: isLargeScreen
											? "3rem"
											: isExtraLargeScreen
												? "3rem"
												: "3rem",
							}}
						>
							<Skeleton
								variant="text"
								sx={{ fontSize: "2rem", width: "20%" }}
							/>
						</Box>
						<Skeleton
							variant="text"
							sx={{ fontSize: "5rem", width: "60%" }}
						/>
						<Skeleton
							variant="text"
							sx={{ fontSize: "3rem", width: "30%" }}
						/>
					</Box>
					<Box
						sx={{
							background: "#fff",
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center",
							width: "100%",
							height: "100%",
							px: isSmallScreen
								? "1.25rem"
								: isMediumScreen
									? "4.5rem"
									: isLargeScreen
										? "4.5rem"
										: isExtraLargeScreen
											? "5.5rem"
											: "4.5rem",
							pt: isSmallScreen
								? "2rem"
								: isMediumScreen
									? "3rem"
									: isLargeScreen
										? "3rem"
										: isExtraLargeScreen
											? "3rem"
											: "3rem",
							pb: isSmallScreen ? "1rem" : "2rem",
						}}
					>
						<Skeleton
							variant="rounded"
							sx={{
								marginLeft: "1rem",
								marginRight: "1rem",
								width: "100%",
								height: "400px",
								objectFit: "contain",
								borderRadius: "12px",
							}}
						/>
					</Box>
					<Box
						sx={{
							background: "#fff",
							justifyContent: "left",
							alignItems: "left",
							alignContent: "left",
							width: "100%",
							height: "100%",
							px: isSmallScreen
								? "1.25rem"
								: isMediumScreen
									? "4.5rem"
									: isLargeScreen
										? "4.5rem"
										: isExtraLargeScreen
											? "5.5rem"
											: "4.5rem",
							pt: isSmallScreen ? "1rem" : "2rem",
							pb: isSmallScreen
								? "2.5rem"
								: isMediumScreen
									? "3rem"
									: isLargeScreen
										? "4rem"
										: isExtraLargeScreen
											? "4rem"
											: "4rem",
						}}
					>
						<Skeleton
							variant="text"
							sx={{ fontSize: "5rem", width: "40%" }}
						/>
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem", width: "100%" }}
						/>
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem", width: "80%" }}
						/>
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem", width: "100%", mt: "2rem" }}
						/>
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem", width: "80%" }}
						/>
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem", width: "100%", mt: "2rem" }}
						/>
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem", width: "80%" }}
						/>
					</Box>
				</>
			) : (
				<>
					<link
						href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
						rel="stylesheet"
					/>
					<Box
						sx={{
							background: "#F4F4F4",
							justifyContent: "left",
							alignItems: "left",
							alignContent: "left",
							width: "100%",
							height: "100%",
							px: isSmallScreen
								? "1.25rem"
								: isMediumScreen
									? "4.5rem"
									: isLargeScreen
										? "4.5rem"
										: isExtraLargeScreen
											? "5.5rem"
											: "4.5rem",
							pb: isSmallScreen
								? "2.5rem"
								: isMediumScreen
									? "3rem"
									: isLargeScreen
										? "4rem"
										: isExtraLargeScreen
											? "4rem"
											: "4rem",
						}}
					>
						<Box
							sx={{
								pt: isSmallScreen
									? "2rem"
									: isMediumScreen
										? "3rem"
										: isLargeScreen
											? "3rem"
											: isExtraLargeScreen
												? "3rem"
												: "3rem",
							}}
						>
							<Typography
								variant="subtitle2"
								sx={{
									textAlign: "left",
									whiteSpace: isMediumScreen
										? "balance"
										: "break-spaces",
									fontFamily: "classicsans",
									fontWeight: "medium",
									color: "#B34038",
									fontSize: isSmallScreen ? "14px" : "20px",
								}}
							>
								{/* @ts-ignore */}
								{blogPostData.fields.Category}
							</Typography>
						</Box>
						<Typography
							variant="h1"
							sx={{
								whiteSpace: "break-spaces",
								textAlign: "left",
								fontFamily: "classicsans",
								fontWeight: "bold",
								color: "#333333",
								fontSize: isSmallScreen ? "28px" : "45px",
								mt: "1rem",
								mb: isSmallScreen ? "1rem" : "2rem",
							}}
						>
							{/* @ts-ignore */}

							{blogPostData.fields.Title}
						</Typography>

						<Typography
							variant="subtitle2"
							sx={{
								textAlign: "left",
								whiteSpace: isMediumScreen
									? "balance"
									: "break-spaces",
								fontFamily: "classicsans",
								fontWeight: "light",
								color: "#333333",
								fontSize: isSmallScreen ? "14px" : "18px",
							}}
						>
							{blogPostData.fields.AuthorName},{" "}
							{formatDate(blogPostData.fields.Date)}
						</Typography>
					</Box>
					<Box
						sx={{
							background: "#fff",
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center",
							width: "100%",
							height: "100%",
							px: isSmallScreen
								? "1.25rem"
								: isMediumScreen
									? "4.5rem"
									: isLargeScreen
										? "4.5rem"
										: isExtraLargeScreen
											? "5.5rem"
											: "4.5rem",
							pt: isSmallScreen
								? "2rem"
								: isMediumScreen
									? "3rem"
									: isLargeScreen
										? "3rem"
										: isExtraLargeScreen
											? "3rem"
											: "3rem",
							pb: isSmallScreen ? "1rem" : "2rem",
						}}
					>
						{/* @ts-ignore */}

						<img
							src={blogPostData.fields.Cover[0].url}
							alt={blogPostData.fields.Title}
							style={{
								marginLeft: "1rem",
								marginRight: "1rem",
								width: "100%",
								height: "400px",
								objectFit: "contain",
								borderRadius: "12px",
								borderBlockColor: "#f4f4f4",
							}}
						/>
					</Box>
					<Box
						sx={{
							background: "#fff",
							justifyContent: "center",
							alignItems: "center",
							alignContent: "center",
							width: "100%",
							height: "100%",
							px: isSmallScreen
								? "1.25rem"
								: isMediumScreen
									? "4.5rem"
									: isLargeScreen
										? "4.5rem"
										: isExtraLargeScreen
											? "5.5rem"
											: "4.5rem",
							pt: isSmallScreen ? "1rem" : "2rem",
							pb: isSmallScreen
								? "2.5rem"
								: isMediumScreen
									? "3rem"
									: isLargeScreen
										? "4rem"
										: isExtraLargeScreen
											? "4rem"
											: "4rem",
						}}
					>
						{/* @ts-ignore */}
						<Markdown
							children={blogPostData.fields.Content}
							remarkPlugins={[remarkGfm]}
							components={customMarkdownComponents as any}
						/>
					</Box>
				</>
			)}
		</>
	);
}
