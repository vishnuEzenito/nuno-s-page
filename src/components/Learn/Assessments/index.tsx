import { HomeData } from "@/lib/constants";
import useProductList from "@/lib/hooks";
import { useEffect, useRef, useState } from "react";
import Loading from "./loading";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
	Box,
	IconButton,
	Paper,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { ArrowUpRight } from "react-feather";
import "../../../fonts/fonts.css";

const stripePromise = loadStripe(
	"pk_test_51P9UN318WhMcYo2CgHGjvYSegQMpLYcJYzL83bvjUeTWecIATBQ1xhEWBVPLBKbEzucL5Z8kuqjrWvMmqzs11hWW00ntEQ4KIS"
);

export default function Assessments() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const scrollContainerRef = useRef(null);
	const [loading, setLoading] = useState(true);
	const [assessmentData] = useState(HomeData.AssessmentData.list);

	const { fetchAssessmentData } = useProductList();

	useEffect(() => {
		const fetchData = async () => {
			if (assessmentData === null) {
				await fetchAssessmentData();
				setLoading(false);
			} else if (assessmentData !== null) {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const scroll = (scrollOffset: number) => {
		if (scrollContainerRef.current) {
			(scrollContainerRef.current as HTMLElement).scrollLeft +=
				scrollOffset;
		}
	};
	const [stripe, setStripe] = useState(null);

	const handleClick = async () => {
		if (!stripe) return;
		// @ts-ignore
		const { error } = await stripe.redirectToCheckout({
			lineItems: [
				{ price: "price_1PI2OU18WhMcYo2CCFaLHJrx", quantity: 1 },
			],
			mode: "payment",
			successUrl: "https://impactnegotiations.vercel.app/",
			cancelUrl: "https://impactnegotiations.vercel.app/learn",
		});

		if (error) {
			console.error("Error:", error);
		}
	};
	stripePromise.then(setStripe as any);

	return (
		<>
			<link
				href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
				rel="stylesheet"
			></link>
			<Box sx={{ background: "#FFFFFF" }}>
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
					Assessments
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
						px: isSmallScreen
							? "1rem"
							: isMediumScreen
								? "4.5rem"
								: isLargeScreen
									? "4.5rem"
									: isExtraLargeScreen
										? "5.5rem"
										: "4.5rem",
					}}
				>
					Learn about yourself and focus efforts to develop as a
					negotiator
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
					{loading ? (
						Array.from({ length: 5 }).map((_, index) => (
							<Loading key={index} />
						))
					) : (
						<>
							{(HomeData.AssessmentData.list as any)?.map(
								(item: any, index: number) => (
									<Box
										key={index}
										sx={{
											display: "inline-block",
											marginLeft: "2rem",
											marginBottom: "0.5rem",
										}}
									>
										{/* @ts-ignore */}
										<Tooltip
											title={item.fields.assessmentname}
											arrow
										>
											<Paper
												onClick={() => {
													if (
														item.fields.tag ===
														"Paid"
													) {
														handleClick();
													} else if (
														item.fields.tag ===
														"Free"
													) {
														window.open(
															item.fields
																.formlink,
															"_blank"
														);
													}
												}}
												key={index}
												sx={{
													position: "relative",
													borderRadius: "16px",
													height: isSmallScreen
														? "100%"
														: "417px",
													width: isSmallScreen
														? "300px"
														: "314px",
													pb: "2rem",
													cursor: "pointer",
												}}
											>
												<Paper
													elevation={0}
													sx={{
														background:
															item.fields.tag ===
															"Paid"
																? "#B34038"
																: item.fields
																			.tag ===
																	  "Free"
																	? "#43C4F2"
																	: "#defaultColor", // Set a default color if neither condition is met
														position: "absolute",
														borderRadius: "100px",
														top: 0,
														height: isSmallScreen
															? "auto"
															: "auto",
														width: isSmallScreen
															? "auto"
															: "auto",
														m: "1rem",
													}}
												>
													<Typography
														variant="body2"
														component="div"
														sx={{
															color: "#fff",
															fontFamily:
																"CircularStd, sans-serif",
															fontWeight: 400,
															fontSize:
																isSmallScreen
																	? "10px"
																	: "12px",
															px: "1rem",
															py: "0.41rem",
														}}
													>
														{/* @ts-ignore */}
														{item.fields.tag}
													</Typography>
												</Paper>

												{/* @ts-ignore */}
												<img
													src={
														item.fields.imageurl[0]
															.url
													}
													alt={
														item.fields
															.assessmentname
													}
													style={{
														width: "100%",
														height: "60%",
														objectFit: "cover",
														borderTopLeftRadius:
															"16px",
														borderTopRightRadius:
															"16px",
													}}
												/>
												<Box
													sx={{
														p: "1rem",
														height: "100%",
														display: "flex",
														flexDirection: "column",
													}}
												>
													<Box
														sx={{
															display: "flex",
															flexDirection:
																"row",
															width: "100%",
															pt: "0.75rem",
														}}
													>
														<Box
															sx={{
																textAlign:
																	"left",
																width: "90%",
																whiteSpace:
																	"break-spaces",
																p: "0",
															}}
														>
															<Typography
																variant="body2"
																sx={{
																	color: "#333333",
																	fontFamily:
																		"classicsans",
																	fontWeight:
																		"Bold",
																	fontSize:
																		isSmallScreen
																			? "16px"
																			: "20px",
																	textAlign:
																		"left",
																	whiteSpace:
																		"break-spaces",
																	overflow:
																		"hidden",
																	textOverflow:
																		"ellipsis",
																}}
															>
																{/* @ts-ignore */}
																{
																	item.fields
																		.assessmentname
																}
															</Typography>
														</Box>
														<Box
															sx={{
																textAlign:
																	"end",
																width: "10%",
																whiteSpace:
																	"break-spaces",
																p: "0",
																display: "flex",
																flexDirection:
																	"row",
															}}
														>
															<ArrowUpRight
																color="#333333"
																size={24}
																style={{
																	marginTop:
																		"4px",
																}}
															/>
														</Box>
													</Box>
													<Box
														sx={{
															display: "flex",
															flexDirection:
																"row",
															width: "100%",
															pt: "0.75rem",
														}}
													>
														<Typography
															variant="body2"
															component="div"
															sx={{
																color: "#4D4D4D",
																fontFamily:
																	"classicsans",
																fontWeight:
																	"light",
																fontSize:
																	isSmallScreen
																		? "14px"
																		: "16px",
																pl: "4px",
																whiteSpace:
																	"pre-wrap", // or 'normal' depending on your preference
															}}
														>
															{/* @ts-ignore */}
															{
																item.fields
																	.description
															}
														</Typography>
													</Box>
												</Box>
											</Paper>
										</Tooltip>
									</Box>
								)
							)}
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
