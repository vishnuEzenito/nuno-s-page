"use client";

import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import {
	Box,
	ButtonBase,
	Paper,
	TextField,
	Typography,
	styled,
} from "@mui/material";
import { useState } from "react";

import { blue, grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../../../fonts/fonts.css";

const Contact = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [loading, setLoading] = useState(true);
	const Textarea = styled(BaseTextareaAutosize)(
		({ theme }) => `
		box-sizing: border-box;
		width: 100%;
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 0.875rem;
		font-weight: 400;
		line-height: 1.5;
		padding: 16px;
		border-radius: 4px;
		color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
		background: #f4f4f4;
		border: 1px solid rgba(0, 0, 0, 0.23);
		box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
	
		&:hover {
		  border-color: rgba(0, 0, 0, 0.87);
		}
	
		&:focus {
		  border-color: ${blue[400]};
		  box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
		}
	
		// firefox
		&:focus-visible {
		  outline: 0;
		}
	  `
	);

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
					Train-the-Trainer support
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
					Contact us to request support to become a Impact
					Negotiations trainer
				</Typography>
				{/* <Box
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
						name="Org"
						id="org"
						placeholder="organisation"
						type="text"
						required
						sx={{
							background: "#F4F4F4",
							borderRadius: "12px",
							width: "100%",
						}}
					/>

					<Textarea
						name="Course"
						id="course"
						placeholder="explain your needs, target audiences, etc"
						minRows={3}
						required
					/>
				</Box>
				<Box
					sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}
				>
					<ButtonBase
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
				</Box> */}
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSd1KdaJk8Jn5Vb9SIjZVEoz2msWykufbAIAyB6JcRVjy5xTqw/viewform?embedded=true"
					width="640"
					height="2500"
					style={{
						maxW: "100%",
					}}
				>
					Loading…
				</iframe>
			</Box>
		</>
	);
};

export default Contact;
