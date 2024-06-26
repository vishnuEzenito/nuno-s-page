"use client";
// components/HeroCarousel.js
import { Box, ButtonBase, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { JoinMaillist } from "@/components/Modals";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../../../fonts/fonts.css";

const Hero = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [openMailListPopup, setOpenMailListPopup] = useState(false);

	return (
		<>
			<link
				href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
				rel="stylesheet"
			></link>
			<Box
				sx={{
					mb: "4rem",
					mt: "4rem",
					display: "flex",
					textAlign: "center",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
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
				<Typography
					variant="h1"
					sx={{
						textAlign: "center",
						fontFamily: "classicsans",
						fontWeight: "bold",
						color: "#5B5B5B",
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
					Get in touch with us!
				</Typography>
				<Typography
					variant="subtitle2"
					sx={{
						textAlign: "center",
						whiteSpace: isMediumScreen ? "balance" : "break-spaces",
						fontFamily: "classicsans",
						fontWeight: "light",
						color: "#8A8A89",
						fontSize: isSmallScreen ? "14px" : "20px",
						mt: "0.5rem",
					}}
				>
					Contact us for support or collabration
				</Typography>
				<Box
					sx={{
						gap: "1rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						width: "50%",
						mt: "2rem",
					}}
				>
					<TextField
						id="name"
						placeholder="Name"
						name="name"
						required
						type="name"
						sx={{
							background: "#F4F4F4",
							".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
								{ borderRadius: "12px" },
							".MuiOutlinedInput-input": { borderRadius: "12px" },
							borderRadius: "12px",
							width: "100%",
						}}
					/>
					<TextField
						name="email"
						placeholder="Email"
						required
						id="email"
						type="email"
						sx={{
							background: "#F4F4F4",
							border: "hidden",
							borderRadius: "12px",
							width: "100%",
						}}
					/>

					<TextField
						id="message"
						name="message"
						label=""
						multiline
						rows={4}
						placeholder="Message"
						defaultValue=""
						sx={{
							background: "#F4F4F4",
							borderRadius: "12px",
							width: "100%",
						}}
					/>
				</Box>
				<Box
					sx={{
						width: "50%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: isSmallScreen ? "column" : "row",
						gap: "2rem",
						mt: "2rem",
					}}
				>
					<ButtonBase
						sx={{
							borderRadius: "12px",
							width: "auto",
						}}
						onClick={() => setOpenMailListPopup(true)}
					>
						<Paper
							sx={{
								borderRadius: "12px",
								background: "#fff",
								width: "auto",
								px: "2rem",
								py: "0.3rem",
								minWidth: "200px",
							}}
						>
							<Typography
								variant="body2"
								sx={{
									whiteSpace: "break-spaces",
									textAlign: "center",
									fontFamily: "CircularStd, sans-serif",
									fontWeight: 100,
									color: "#B34038",
									fontSize: isSmallScreen ? "14px" : "20px",
									py: "0.5rem",
								}}
							>
								Join our mailing list
							</Typography>
						</Paper>
					</ButtonBase>
					<ButtonBase
						sx={{
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
								minWidth: "200px",
							}}
						>
							<Typography
								variant="body2"
								sx={{
									whiteSpace: "break-spaces",
									textAlign: "center",
									fontFamily: "CircularStd, sans-serif",
									fontWeight: 100,
									color: "#fff",
									fontSize: isSmallScreen ? "14px" : "20px",
									py: "0.5rem",
								}}
							>
								Send
							</Typography>
						</Paper>
					</ButtonBase>
				</Box>
			</Box>
			{openMailListPopup ? (
				<JoinMaillist onClose={() => setOpenMailListPopup(false)} />
			) : null}
		</>
	);
};

export default Hero;
