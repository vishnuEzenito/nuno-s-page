// components/HeroCarousel.js

import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../../../fonts/fonts.css";

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
							50+ powerful tools to negotiate a better job, life,
							community, and world
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
							Adopt empowering mindsets, connect, build, and close
							deals like an expert, and keep improving for best
							impact
						</Typography>
						{/* <Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "2rem",
							}}
						>
							<ButtonBase
								sx={{
									mt: "2rem",
									borderRadius: "12px",
									width: "auto",
								}}
							>
								<Link href="#tools">
									<Paper
										sx={{
											borderRadius: "12px",
											background: "#B34038",
											width: "auto",
											px: "2rem",
											py: "0.3rem",
											maxWidth: isSmallScreen
												? "auto"
												: isMediumScreen
													? "200px"
													: isLargeScreen
														? "200px"
														: isExtraLargeScreen
															? "200px"
															: "200px",
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
											Explore Tools
										</Typography>
									</Paper>
								</Link>
							</ButtonBase>
						</Box> */}
					</Grid>
					<Grid item key={"image2"} xs={12} md={6} lg={6}>
						<img
							src={"/assets/tools.svg"}
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
