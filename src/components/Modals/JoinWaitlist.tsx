import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { X } from "react-feather";

type JoinWaitlistProps = {
	onClose: () => void;
};

const JoinWaitlist: React.FC<JoinWaitlistProps> = ({ onClose }) => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Modal
			open={true}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "85%",
					height: "auto",
					maxWidth: "650px",
					bgcolor: "background.paper",
					boxShadow: 24,
					borderRadius: "18px",
					px: 2,
					py: 1,
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
						onClick={onClose}
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
					<iframe
						width="600px"
						height="580px"
						src="https://cdn.forms-content-1.sg-form.com/254e7221-3132-11ef-8478-36ec83a05feb"
					/>
				</Box>
			</Box>
		</Modal>
	);
};

export default JoinWaitlist;
