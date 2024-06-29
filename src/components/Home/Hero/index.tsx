// components/HeroCarousel.js

import { Box, ButtonBase, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../../../fonts/fonts.css";

const Hero = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [loading, setLoading] = useState(true);

	return (
		<>
			<link
				href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
				rel="stylesheet"
			></link>
			<Box
				sx={{
					pt: "3rem",
					pb: "2rem",
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
					sx={{ flexWrap: "wrap" }}
				>
					<Grid
						item
						key={"Herotext"}
						xs={12}
						md={6}
						lg={6}
						sx={{
							mt: isSmallScreen ? "1.25rem" : "6%",
							display: "flex",
							flexDirection: "column",
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
							Unlock your negotiation potential and maximize
							impact.
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
											? "20%"
											: isExtraLargeScreen
												? "20%"
												: "10%",
								textAlign: isSmallScreen ? "center" : "left",
								fontFamily: "classicsans",
								fontWeight: "light",
								color: "#1c1c1c",
								fontSize: isSmallScreen ? "14px" : "20px",
								mt: "0.5rem",
							}}
						>
							Whether in business deals, policy negotiations,
							conflicts, or personal relationships, this practical
							guide equips you with empowering mindsets and tools
							to succeed.
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "2rem",
							}}
						>
							<ButtonBase
								href="#cta"
								sx={{
									mt: "2rem",
									borderRadius: "12px",
									width: "auto",
								}}
							>
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
										Get Started
									</Typography>
								</Paper>
							</ButtonBase>
							<ButtonBase
								sx={{
									mt: "2rem",
									borderRadius: "12px",
									width: "auto",
								}}
							>
								<Link href="#knowmore">
									<Paper
										sx={{
											borderRadius: "12px",
											background: "#EEEEEE",
											width: "auto",
											px: "2.5rem",
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
												color: "#333333",
												fontSize: isSmallScreen
													? "14px"
													: "20px",
												py: "0.5rem",
											}}
										>
											Learn More
										</Typography>
									</Paper>
								</Link>
							</ButtonBase>
						</Box>
					</Grid>

					<Grid item key={"HeroImage"} xs={12} md={6} lg={6}>
						<img
							src={"/assets/HeroImage.svg"}
							alt="bgimage"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "contain",
							}}
						/>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={{ xs: 2, md: 2, xl: 4 }}
					sx={{
						flexWrap: "wrap-reverse",
						pt: isSmallScreen ? "2rem" : "6rem",
						justifyContent: "space-between",
					}}
				>
					<Grid item key={"image2"} xs={12} md={4} lg={4}>
						<Image
							src={"/assets/HomeSection2.svg"}
							alt="bgimage"
							width={1920}
							height={1080}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "contain",
							}}
						/>
					</Grid>

					<Grid
						item
						key={"text2"}
						xs={12}
						md={8}
						lg={8}
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
										? "40px"
										: isLargeScreen
											? "45px"
											: isExtraLargeScreen
												? "45px"
												: "40px",
							}}
						>
							What are Impact Negotiations?
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
							Negotiation is any effort to persuade. We negotiate
							all the time, about everything, with everyone, since
							our birth. It is a learnable skill: systematic
							negotiation processes, tools, and skills can help us
							get what we truly value.
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
							The most ambitious changemakers use negotiations to
							create the world we envision. In Impact Negotiations
							we take into account the broader effects of our
							decisions and deals on others and the planet. We
							decide the scope of our negotiations considering
							what truly matters to us, our families, our
							organizations, our communities, and the world.
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
								<Link href="/learn">
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
											Know More
										</Typography>
									</Paper>
								</Link>
							</ButtonBase>
						</Box> */}
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Hero;
