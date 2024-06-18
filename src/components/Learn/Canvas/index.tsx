import { HomeData } from "@/lib/constants";
import useProductList from "@/lib/hooks";
import { useEffect, useRef, useState } from "react";

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
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import "../../../fonts/fonts.css";
import Loading from "./loading";

export default function Canvas() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const scrollContainerRef = useRef(null);
	const [loading, setLoading] = useState(true);
	const [canvasData, setCanvasData] = useState(HomeData.canvas.list);
	const { fetchCanvasData } = useProductList();

	const scroll = (scrollOffset: number) => {
		if (scrollContainerRef.current) {
			(scrollContainerRef.current as HTMLElement).scrollLeft +=
				scrollOffset;
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			if (canvasData === null) {
				const data = await fetchCanvasData();
				setCanvasData(data.records);
				setLoading(false);
			} else if (canvasData !== null) {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

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
					Negotiation Canvas Examples
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{
						textAlign: "center",
						whiteSpace: isMediumScreen ? "balance" : "break-spaces",
						fontFamily: "classicsans",
						fontWeight: "light",
						color: "#333333",
						fontSize: isSmallScreen ? "14px" : "20px",
					}}
				>
					Start from pre-filled Canvas examples and adapt them to your
					situation
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
							{/* @ts-ignore */}
							{HomeData.canvas.list.map((item, index) => (
								<Box
									key={index}
									sx={{
										display: "inline-block",
										marginLeft: "2rem",
										marginBottom: "0.5rem",
									}}
								>
									{" "}
									{/* Added marginBottom */}
									<Paper
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
										}}
									>
										{/* @ts-ignore */}
										<Link
											href={item.fields.url}
											key={index}
										>
											{/* @ts-ignore */}
											<Paper
												elevation={0}
												sx={{
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
													background: "#43C4F2",
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
														fontSize: isSmallScreen
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
												src={item.fields.image[0].url}
												alt={item.fields.name}
												style={{
													width: "100%",
													height: "60%",
													objectFit: "cover",
													borderTopLeftRadius: "16px",
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
												{/* @ts-ignore */}

												<Box
													sx={{
														display: "flex",
														flexDirection: "row",
														width: "100%",
														pt: "0.75rem",
													}}
												>
													<Box
														sx={{
															textAlign: "left",
															width: "90%",
															whiteSpace:
																"break-spaces",
															p: "0",
														}}
													>
														<Tooltip
															title={
																item.fields.name
															}
															arrow
														>
															<Typography
																variant="body2"
																sx={{
																	color: "#333333",
																	fontFamily:
																		"classicsans",
																	fontWeight:
																		"bold",
																	fontSize:
																		isSmallScreen
																			? "12px"
																			: "20px",
																	textAlign:
																		"left",
																	whiteSpace:
																		"nowrap",
																	overflow:
																		"hidden",
																	textOverflow:
																		"ellipsis",
																}}
															>
																{/* @ts-ignore */}
																{
																	item.fields
																		.name
																}
															</Typography>
														</Tooltip>
													</Box>
													<Box
														sx={{
															textAlign: "end",
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
														flexDirection: "row",
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
															fontWeight: "light",
															fontSize: "16px",
															pl: "4px",
															whiteSpace:
																"pre-wrap", // or 'normal' depending on your preference
														}}
													>
														{
															item.fields
																.description
														}
													</Typography>
												</Box>
											</Box>
										</Link>
									</Paper>
								</Box>
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
