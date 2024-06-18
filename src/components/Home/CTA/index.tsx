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
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../../../fonts/fonts.css";
import { loadStripe } from "@stripe/stripe-js";
import FreeSampleModal from "../freesample"; // Import the modal component

const stripePromise = loadStripe(
	"pk_test_51P9UN318WhMcYo2CgHGjvYSegQMpLYcJYzL83bvjUeTWecIATBQ1xhEWBVPLBKbEzucL5Z8kuqjrWvMmqzs11hWW00ntEQ4KIS"
);

const Hero = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [loading, setLoading] = useState(true);
	const [stripe, setStripe] = useState(null);
	const [modalOpen, setModalOpen] = useState(false); // State to control the modal

	const handleClick = async () => {
		if (!stripe) return;
		// @ts-ignore
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{ price: "price_1PHgS118WhMcYo2CkPYQkfYE", quantity: 1 },
			],
			mode: "payment",
			successUrl: "https://impactnegotiations.vercel.app/",
			cancelUrl: "https://impactnegotiations.vercel.app/learn",
		});

		if (error) {
			console.error("Error:", error);
		}
	};
	// @ts-ignore
	stripePromise.then(setStripe);

	return (
		<>
			<Box
				sx={{
					mt: "6rem",
					pt: isSmallScreen ? "1.25rem" : "5rem",
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
					<Grid item key={"HeroImage"} xs={12} md={4} lg={4}>
						<img
							src={"/assets/BookMock.png"}
							alt="bgimage"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "contain",
							}}
						/>
					</Grid>

					<Grid
						item
						key={"Herotext"}
						xs={12}
						md={8}
						lg={8}
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
								color: "#5B5B5B",
								fontSize: isSmallScreen
									? "28px"
									: isMediumScreen
										? "40px"
										: isLargeScreen
											? "45px"
											: isExtraLargeScreen
												? "45px"
												: "40rem",
							}}
						>
							Empower yourself with 55 tools to negotiate a better
							job, life, community, and world
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
								color: "#8A8A89",
								fontSize: isSmallScreen ? "14px" : "20px",
								mt: "0.5rem",
							}}
						>
							Nuno Delicado is a negotiation expert with extensive
							experience in complex negotiations worldwide. Learn
							from this practical guide and negotiate for maximum
							impact
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "2rem",
							}}
						>
							<ButtonBase
								role="link"
								onClick={handleClick}
								disabled={!stripe}
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
										Buy Now
									</Typography>
								</Paper>
							</ButtonBase>
							<ButtonBase
								onClick={() => setModalOpen(true)}
								sx={{
									// Open modal on click
									mt: "2rem",
									borderRadius: "12px",
									width: "auto",
								}}
							>
								<Paper
									sx={{
										borderRadius: "12px",
										background: "#EEEEEE",
										width: "auto",
										px: "1.5rem",
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
											color: "#333333",
											fontSize: isSmallScreen
												? "14px"
												: "20px",
											py: "0.5rem",
										}}
									>
										Get Free Sample
									</Typography>
								</Paper>
							</ButtonBase>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<FreeSampleModal
				open={modalOpen}
				handleClose={() => setModalOpen(false)}
			/>{" "}
			{/* Include modal */}
		</>
	);
};

export default Hero;
