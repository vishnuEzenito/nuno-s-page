// components/HeroCarousel.js

import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import {
	Button,
	Typography,
	Grid,
	Box,
	ButtonBase,
	Paper,
} from "@mui/material";
import { Toolbar } from "@mui/material";
import Link from "next/link";

import { HomeData } from "@/lib/constants";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "../../../fonts/fonts.css";

const images = [
	{
		bgimg: `${HomeData.hero.deskTopImgUrl}`,
		hdr1: "A global B2B marketplace for Sustainable Procurement",
		hdr2: "for Sustainable Procurement",
		subhdr1: "We help companies make sustainable procurements so that",
		subhdr1_1: "supply chains can operate in harmony with the environment.",
		subhdr2: "Choose us for hassle-free procurement of raw material to",
		subhdr2_1: "reduce the environmental footprint of your business.",
		img1: `${HomeData.hero.title.img1}`,
		img1txt: "Reduce Carbon Footprint",
		img2: `${HomeData.hero.title.img2}`,
		img2txt: "Supply Chain Resilience​",
		img3: `${HomeData.hero.title.img3}`,
		img3txt: "Quality Assurance",
		img4: `${HomeData.hero.title.img4}`,
		img4txt: "Verified Suppliers",
	},

	{
		bgimg: `${HomeData.hero.deskTopImgUrl2}`,
		hdr1: "A platform to simplify your sustainable sourcing experience",
		hdr2: "sustainable sourcing experience",
		subhdr1: "Discover raw material and products that are good for your",
		subhdr1_1: "Business and for the Planet.",
		subhdr2:
			"We bring together trusted suppliers , partners and experts so",
		subhdr2_1: "you can search, quote and purchase - all in one place!",
		img1: `${HomeData.hero.title.img5}`,
		img1txt: "Renewable",
		img2: `${HomeData.hero.title.img6}`,
		img2txt: "Biodegradable",
		img3: `${HomeData.hero.title.img7}`,
		img3txt: "Low Environmental Footprint",
		img4: `${HomeData.hero.title.img8}`,
		img4txt: "Certified Sustainable",
	},
];

const Hero = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 0); // Simulating 2 seconds delay
	}, []);

	return (
		<>
			<link
				href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
				rel="stylesheet"
			></link>
			<Box
				sx={{
					pb: "3rem",
					width: "100%",
					height: "auto",
					px: isSmallScreen
						? "1.25rem"
						: isMediumScreen
							? "4.5rem"
							: isLargeScreen
								? "4.5rem"
								: isExtraLargeScreen
									? "5.5rem"
									: "4.5rem",
				}}
			>
				<Grid
					container
					spacing={{ xs: 2, md: 2, xl: 4 }}
					sx={{
						flexWrap: "wrap-reverse",
						pt: isSmallScreen ? "2rem" : "4rem",
						justifyContent: "space-between",
					}}
				>
					<Grid
						item
						key={"text2"}
						xs={12}
						md={6}
						lg={6}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: isSmallScreen ? "center" : "start",
						}}
					>
						<Typography
							variant="h1"
							sx={{
								textAlign: isSmallScreen ? "center" : "left",
								fontFamily: "classicsans",
								fontWeight: "bold",
								color: "#333333",
								fontSize: isSmallScreen
									? "28px"
									: isMediumScreen
										? "45px"
										: isLargeScreen
											? "50px"
											: isExtraLargeScreen
												? "50px"
												: "45px",
							}}
						>
							Learn more from other resources
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{
								whiteSpace: isMediumScreen
									? "balance"
									: "break-spaces",
								pr: isSmallScreen
									? "0rem"
									: isMediumScreen
										? "10%"
										: isLargeScreen
											? "10%"
											: isExtraLargeScreen
												? "10%"
												: "10%",
								textAlign: isSmallScreen ? "center" : "left",
								fontFamily: "classicsans",
								fontWeight: "light",
								color: "#1c1c1c",
								fontSize: isSmallScreen ? "14px" : "20px",
								mt: "0.5rem",
							}}
						>
							Take assessments, play around with filled canvas
							templates and refer other resources to master
							negotiation.
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row" }}>
							<ButtonBase
								sx={{
									mt: "2rem",
									borderRadius: "12px",
									width: "auto",
								}}
							>
								<Link href="#canvas">
									<Paper
										sx={{
											borderRadius: "12px",
											background: "#B34038",
											width: "auto",
											px: "2rem",
											py: "0.3rem",
										}}
									>
										<Typography
											variant="body2"
											sx={{
												whiteSpace: "break-spaces",
												textAlign: "center",
												fontFamily:
													"CircularStd, sans-serif",
												fontWeight: 100,
												color: "#fff",
												fontSize: isSmallScreen
													? "14px"
													: "20px",
												py: "0.5rem",
											}}
										>
											Explore Materials
										</Typography>
									</Paper>
								</Link>
							</ButtonBase>
						</Box>
					</Grid>
					<Grid item key={"image2"} xs={12} md={6} lg={6}>
						<img
							src={"/assets/learn.svg"}
							alt="bgimage"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "contain",
							}}
						/>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Hero;
