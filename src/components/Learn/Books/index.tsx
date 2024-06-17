import { Button } from "@nextui-org/react";
import React, { useRef, useEffect, useState } from "react";
import { HomeData } from "@/lib/constants";
import useProductList from "@/lib/hooks";
import Loading from "./loading";

import {
	Typography,
	useMediaQuery,
	useTheme,
	Box,
	Paper,
	IconButton,
	Tooltip,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { ArrowUpRight, Star } from "react-feather";
import Link from "next/link";
import "../../../fonts/fonts.css";

const BooksCard: React.FC<{
	isSmallScreen: boolean;
	href: string;
	image: string;
	text: string;
	bookName: string;
	author: string;
}> = ({ isSmallScreen, href, image, text, bookName, author }) => {
	const imageRef = useRef<any>(null);
	return (
		<Box
			sx={{
				display: "inline-block",
				marginLeft: "2rem",
				marginBottom: "0.5rem",
			}}
		>
			<Paper
				sx={{
					position: "relative",
					borderRadius: "16px",
					width: isSmallScreen ? "600px" : "628px",
					height: isSmallScreen ? "300px" : "314px",
					padding: "1rem",
					overflow: "hidden",
				}}
			>
				<a
					href={href}
					target="_blank"
					className="link inline-flex flex-row gap-2 w-full h-full overflow-hidden"
				>
					<img
						src={image}
						alt={text}
						ref={imageRef}
						className="h-full object-contain rounded-[8px]"
					/>
					<div
						className="flex justify-start items-start flex-col gap-4 max-w-full p-1"
						style={{
							width: isSmallScreen
								? `${600 - imageRef.current?.offsetWidth}px`
								: `${628 - imageRef.current?.offsetWidth}px`,
						}}
					>
						<span
							style={{
								color: "#333333",
								fontFamily: "classicsans",
								fontWeight: "bold",
								fontSize: isSmallScreen ? "24px" : "32px",
							}}
              className="w-full whitespace-normal"
						>
							{bookName}
						</span>
						<span
							style={{
								color: "#333333",
								fontFamily: "classicsans",
								fontWeight: "bold",
								fontSize: isSmallScreen ? "16px" : "20px",
							}}
              className="w-full whitespace-normal"
						>
							{author}
						</span>
					</div>
				</a>
			</Paper>
		</Box>
	);
};

export default function Books() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const scrollContainerRef = useRef(null);
	const [loading, setLoading] = useState(true);
	const [bookData, setBookData] = useState(HomeData.books.records);
	const { fetchBookData } = useProductList();

	const scroll = (scrollOffset: number) => {
		if (scrollContainerRef.current) {
			(scrollContainerRef.current as HTMLElement).scrollLeft +=
				scrollOffset;
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			if (bookData === null) {
				const data = await fetchBookData();
				console.log(data);
				setLoading(false);
			} else if (bookData !== null) {
				setLoading(false);
			}
			console.log(HomeData.books.records);
		};

		fetchData();
	}, []);

	console.log();
	return (
		<>
			<link
				href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
				rel="stylesheet"
			></link>
			<Box sx={{ background: "#FCFCFC" }}>
				<Typography
					variant="h1"
					sx={{
						whiteSpace: "break-spaces",
						textAlign: "center",
						fontFamily: "classicsans",
						fontWeight: "bold",
						color: "#333333",
						fontSize: isSmallScreen ? "28px" : "45px",
						px: isSmallScreen
							? "1.25rem"
							: isMediumScreen
							? "4.5rem"
							: isLargeScreen
							? "4.5rem"
							: isExtraLargeScreen
							? "5.5rem"
							: "4.5rem",
						mt: isSmallScreen
							? "2rem"
							: isMediumScreen
							? "3rem"
							: isLargeScreen
							? "3rem"
							: isExtraLargeScreen
							? "3rem"
							: "3rem",
						mb: "0.5rem",
					}}
				>
					Go deeper with our bibliography
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{
						textAlign: "center",
						whiteSpace: isMediumScreen ? "balance" : "break-spaces",
						fontFamily: "classicsans",
						fontWeight: "light",
						color: "#333333",
						fontSize: isSmallScreen ? "16px" : "20px",
					}}
				>
					Take a deep dive on particular topics through the books that
					inspired our tools
				</Typography>

				<div
					style={{
						overflowX: "auto",
						overflowY: "hidden",
						flexWrap: "nowrap",
						padding: "1rem",
						paddingLeft: isSmallScreen ? "1.5rem" : "4rem",
						display: "flex",
						alignItems: "center",
						scrollbarWidth: "none",
						msOverflowStyle: "none",
						marginTop: "2rem",
					}}
					ref={scrollContainerRef}
				>
					{/* @ts-ignore */}
					{loading ? (
						Array.from({ length: 5 }).map((_, index) => (
							<Loading key={index} />
						))
					) : (
						<>
							{(HomeData.books.records as any)
								?.sort(
									(a: any, b: any) =>
										a.fields.id - b.fields.id
								)
								.map((item: any, index: number) => (
									<BooksCard
										isSmallScreen={isSmallScreen}
										href={item.fields.refer}
										image={item.fields.Coverimg[0].url}
										text={item.text}
										bookName={item.fields.Bookname}
										author={item.fields.Authorname}
										key={index}
									/>
								))}
						</>
					)}
				</div>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						p: "0px",
						mt: "1rem",
						mb: "2.5rem",
					}}
				>
					<IconButton
						onClick={() => scroll(-700)}
						style={{
							background: "#EEEEEE",
							height: "35px",
							width: "35px",
							marginRight: "1px",
						}}
					>
						<ArrowBackIosNewRoundedIcon
							sx={{
								color: "#5E5E5E",
								height: "20px",
								width: "20px",
								strokeWidth: "1.6px",
							}}
						/>
					</IconButton>
					<IconButton
						onClick={() => scroll(700)}
						style={{
							background: "#EEEEEE",
							height: "35px",
							width: "35px",
							marginLeft: "1px",
						}}
					>
						<ArrowForwardIosRoundedIcon
							sx={{
								color: "#5E5E5E",
								height: "20px",
								width: "20px",
								strokeWidth: "1.6px",
							}}
						/>
					</IconButton>
				</Box>
			</Box>
		</>
	);
}
