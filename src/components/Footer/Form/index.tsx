import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "Me4YyWzJg";

export default function ContactForm() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});
	const [loading, setLoading] = useState(true);

	const [state, handleSubmit] = useForm("xrgnkrze");

	if (state.succeeded) {
		return (
			<>
				<div className="email-card w-[100%] p-5 flex flex-col gap-2 items-center">
					<Typography
						variant="subtitle2"
						sx={{
							whiteSpace: isMediumScreen
								? "balance"
								: "break-spaces",
							pr: isSmallScreen
								? "0rem"
								: isMediumScreen
									? "15%"
									: isLargeScreen
										? "40%"
										: isExtraLargeScreen
											? "50%"
											: "15%",
							textAlign: isSmallScreen ? "center" : "left",
							fontFamily: "CircularStd, sans-serif",
							fontWeight: 100,
							color: "#CAD4CB",
							fontSize: isSmallScreen ? "14px" : "16px",
							mt: "0.5rem",
						}}
					>
						Thanks! will get back to you soon.
					</Typography>
				</div>
			</>
		);
	}

	return (
		<form onSubmit={handleSubmit} style={{ width: "100%" }}>
			<div className="email-card w-[100%] p-5 flex flex-col gap-4 text-left">
				<Typography
					variant="subtitle2"
					sx={{
						whiteSpace: isMediumScreen ? "balance" : "break-spaces",
						textAlign: "left",
						fontFamily: "CircularStd, sans-serif",
						fontWeight: 100,
						color: "#CAD4CB",
						fontSize: isSmallScreen ? "14px" : "16px",
						mt: "0.5rem",
					}}
				>
					For enquiries , drop a message here ​
				</Typography>
				<div className="w-[100%] flex flex-row gap-2 items-center ">
					<Input
						id="name"
						name="name"
						placeholder="Name*"
						isRequired
						variant="bordered"
						classNames={{
							input: "email-card-color placeholder:text-[#fff]",
						}}
					/>

					<Input
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						isRequired
						variant="bordered"
						classNames={{
							input: "email-card-color placeholder:text-[#fff]",
						}}
					/>
				</div>

				<Textarea
					id="message"
					name="message"
					placeholder="Which product are you looking for ?"
					isRequired
					variant="bordered"
					classNames={{
						input: "email-card-color placeholder:text-[#fff]",
					}}
				/>

				<Button
					type="submit"
					disabled={state.submitting}
					radius="full"
					variant="solid"
					className="text-[#4F6F52]"
					style={{
						width: "178px",
						height: "52px",
						background: "#D3E6CC",
						alignSelf: "center",
					}}
				>
					Send
				</Button>
			</div>
		</form>
	);
}
