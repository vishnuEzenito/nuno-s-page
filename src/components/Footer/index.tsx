"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ContactForm from "./Form";
import Link from "next/link";
import { Typography, useMediaQuery, useTheme, Box, Grid } from "@mui/material";
import "../../fonts/fonts.css";

export default function Footer() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const menuItems = [
		{
			id: 0,
			title: "Home",
			url: "/",
		},
		{
			id: 1,
			title: "Tools",
			url: "/tools",
		},
		{
			id: 2,
			title: "Learn",
			url: "/learn",
		},
		{
			id: 3,
			title: "Teach",
			url: "/teach",
		},
		{
			id: 4,
			title: "Author",
			url: "/author",
		},
		{
			id: 5,
			title: "Contact",
			url: "/contact",
		},
	];

	return (
		<>
			<Box
				sx={{
					background: "#B34038",
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
				<Box>
					<Grid
						container
						spacing={{ xs: 2, md: 2, xl: 4 }}
						sx={{ py: "2rem" }}
					>
						<Grid
							item
							key={"text"}
							xs={12}
							md={3}
							lg={3}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: isSmallScreen ? "center" : "start",
							}}
						>
							<Link href={"/"}>
								<Image
									src={"/assets/lightlogo.svg"}
									width={231}
									height={58}
									alt="logo"
								/>
							</Link>
						</Grid>

						<Grid
							item
							key={"menu"}
							xs={12}
							md={9}
							lg={9}
							gap={isSmallScreen ? 2 : 4}
							sx={{}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: isSmallScreen
										? "column"
										: "row",
									justifyContent: isSmallScreen
										? "center"
										: "end",
									gap: isMediumScreen
										? "1rem"
										: isLargeScreen
										? "2rem"
										: isExtraLargeScreen
										? "3rem"
										: "2rem",
								}}
							>
								{menuItems.map((item) => (
									<Link href={item.url} key={item.id}>
										<Typography
											variant="subtitle2"
											sx={{
												whiteSpace: isMediumScreen
													? "balance"
													: "break-spaces",
												textAlign: isSmallScreen
													? "center"
													: "left",
												fontFamily:
													"CircularStd, sans-serif",
												fontWeight: 100,
												color: "#fff",
												fontSize: isSmallScreen
													? "14px"
													: "18px",
												mt: "0.5rem",
											}}
										>
											{item.title}
										</Typography>
									</Link>
								))}
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box>
					<Grid
						container
						spacing={{ xs: 2, md: 2, xl: 4 }}
						sx={{ py: "2rem" }}
					>
						<Grid
							item
							key={"menu"}
							xs={12}
							md={4}
							lg={4}
							gap={isSmallScreen ? 2 : 4}
							sx={{
								display: "flex",
								flexDirection: isSmallScreen ? "column" : "row",
								alignItems: isSmallScreen ? "center" : "start",
								mt: "2rem",
							}}
						>
							<Typography
								variant="subtitle2"
								sx={{
									whiteSpace: isMediumScreen
										? "balance"
										: "break-spaces",
									textAlign: isSmallScreen
										? "center"
										: "left",
									fontFamily: "classicsans",
									fontWeight: "light",
									color: "#fff",
									fontSize: isSmallScreen ? "14px" : "16px",
									mt: "0.5rem",
								}}
							>
								contact@impactnegotiations.com
							</Typography>
						</Grid>
						<Grid
							item
							key={"menu"}
							xs={12}
							md={4}
							lg={4}
							gap={isSmallScreen ? 2 : 4}
							sx={{
								display: "flex",
								flexDirection: isSmallScreen ? "column" : "row",
								alignItems: "center",
								textAlign: "center",
								mt: "2rem",
							}}
						>
							<Typography
								variant="subtitle2"
								sx={{
									textAlign: "center",
									whiteSpace: isMediumScreen
										? "balance"
										: "break-spaces",
									fontFamily: "classicsans",
									fontWeight: "xlight",
									color: "#fff",
									fontSize: isSmallScreen ? "14px" : "14px",
									mt: "0.5rem",
								}}
							>
								© 2024 Impact Negotiations | All Rights Reserved
							</Typography>
						</Grid>
						<Grid
							item
							key={"icons"}
							xs={12}
							md={4}
							lg={4}
							sx={{ mt: "2rem" }}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: isSmallScreen
										? "center"
										: "end",
								}}
							>
								<Image
									src="/insta.svg"
									alt="phone icon"
									width={24}
									height={24}
									className="object-fit"
									style={{ margin: "0.5rem" }}
								/>
								<Image
									src="/linkedin.svg"
									alt="phone icon"
									width={24}
									height={24}
									className="object-fit"
									style={{ margin: "0.5rem" }}
								/>
								<Image
									src="/whatsapp.svg"
									alt="phone icon"
									width={24}
									height={24}
									className="object-fit"
									style={{ margin: "0.5rem" }}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
