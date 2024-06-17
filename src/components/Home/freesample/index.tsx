import React, { useState } from "react";
import {
	Modal,
	Box,
	Typography,
	TextField,
	ButtonBase,
	Paper,
	IconButton,
	Alert,
	AlertTitle,
} from "@mui/material";
import axios from "axios";
import { X } from "react-feather";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// @ts-ignore
const FreeSampleModal = ({ open, handleClose }: any) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [formLoading, setFormLoading] = useState(true);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	{
		/* @ts-ignore */
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await axios.post("https://yourapi.com/endpoint", { name, email });
			setSuccess(true);
			setFormLoading(false);
			setTimeout(() => {
				handleClose();
				setFormLoading(true);
				setSuccess(false);
			}, 3000);
		} catch (err) {
			setError("Failed to submit. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: isSmallScreen ? "90%" : "70%",
					height: isSmallScreen ? "auto" : "auto",
					maxWidth: "590px",
					bgcolor: "background.paper",
					boxShadow: 24,
					borderRadius: "18px",
					p: 4,
				}}
			>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
					}}
				>
					<IconButton
						onClick={handleClose}
						style={{
							background: "#EBF4E8",
							height: "35px",
							width: "35px",
							marginRight: "1px",
						}}
					>
						<X color="#739072" size="20px" />
					</IconButton>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						variant="h1"
						sx={{
							textAlign: "center",
							fontFamily: "CircularStd, sans-serif",
							fontWeight: 500,
							color: "#5B5B5B",
							fontSize: isSmallScreen ? "20px" : "28px",
						}}
					>
						Get Your Free Sample
					</Typography>
					<Typography
						variant="h3"
						sx={{
							fontSize: isSmallScreen ? "14px" : "16px",
							textAlign: "center",
							my: "2rem",
						}}
					>
						By submitting you agree to be included in our mailing
						list. You can unsubscribe any time.
					</Typography>
					<Box
						component="form"
						autoComplete="on"
						onSubmit={handleSubmit}
						sx={{
							gap: "1rem",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<TextField
							id="name"
							placeholder="Name"
							name="name"
							required
							type="text"
							sx={{
								background: "#F4F4F4",
								".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
									{ borderRadius: "12px" },
								".MuiOutlinedInput-input": {
									borderRadius: "12px",
								},
								borderRadius: "12px",
								width: "100%",
							}}
							onChange={(e) => setName(e.target.value)}
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
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "2rem",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<ButtonBase
								type="submit"
								disabled={submitting}
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
										Send
									</Typography>
								</Paper>
							</ButtonBase>
						</Box>
					</Box>
					{success && (
						<Alert
							variant="filled"
							severity="success"
							sx={{
								width: "100%",
								background: "#4F6F52",
								mt: "1rem",
							}}
						>
							<AlertTitle>Success</AlertTitle>
							Thanks for submitting!
						</Alert>
					)}
					{error && (
						<Typography color="error" sx={{ mt: 2 }}>
							{error}
						</Typography>
					)}
				</Box>
			</Box>
		</Modal>
	);
};

export default FreeSampleModal;
