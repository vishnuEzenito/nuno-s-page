"use client";
import { JoinWaitlist } from "@/components/Modals";
import {
	Box,
	ButtonBase,
	Paper,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowLeft } from "react-feather";
import { LuBox } from "react-icons/lu";

type ToolsDataProps = {
	id: string;
	toolData: any;
};

const ToolsData: React.FC<ToolsDataProps> = ({ id, toolData }) => {
	const theme = useTheme();
	const router = useRouter();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
	const [openJoinWaitlistPopup, setOpenJoinWaitlistPopup] = useState(false);
	return (
		<>
			<div className="w-full flex justify-start items-center px-4 sm:px-[7%]">
				<button
					className="w-12 h-12 rounded-full p-2 bg-[transparent] hover:bg-[rgba(0,0,0,0.05)] transition-all ease-in-out duration-200"
					onClick={() => {
						const args = new URLSearchParams(
							window.location.search
						);
						const newTab = args.get("tab");
						if (newTab) {
							args.set("tab", newTab);
						} else {
							args.set("tab", "category");
						}
						router.push(`/tools?ref=${id}&${args.toString()}`);
						// router.push(`/tools?ref=${id}&tab=${new URLSearchParams(window.location.search).get("tab")}`);
					}}
				>
					<ArrowLeft className="w-full h-full" />
				</button>
			</div>
			<section className="w-full flex justify-start items-start flex-col gap-2 px-4 sm:px-[7%] pt-8 pb-10">
				{toolData ? (
					<>
						<div className="jumbotron w-full flex justify-start items-center gap-4 p-8 rounded-xl shadow-xl">
							<img
								src={toolData.drive_icon_link}
								alt={toolData.icon?.[0]?.filename}
								width={toolData.icon?.[0]?.width}
								height={toolData.icon?.[0]?.height}
							/>
							<div className="jumbo-content w-1/2 flex justify-center items-start flex-col gap-4">
								<h1
									style={{
										fontSize: "2rem",
										fontWeight: "bold",
									}}
								>
									{toolData?.Toolname}
								</h1>
								<p className="whitespace-pre-wrap">
									{toolData.oneLineSummary}
								</p>
								<hr className="h-1 w-full bg-[#E3E3E3]" />
								<span className="flex justify-start items-center gap-2 whitespace-pre-wrap">
									<LuBox /> {toolData.category}
								</span>
								<span className="whitespace-pre-wrap">
									Use Case: {toolData.useCase}
								</span>
							</div>
						</div>
						{/* toolData.oneLineSummary ? (
							<div className="section w-full flex justify-center items-start flex-col gap-4 py-4">
								<h2>Summary</h2>
								<p>{toolData.oneLineSummary}</p>
							</div>
						) : null */}
						{toolData.purpose ? (
							<div className="section w-full flex justify-center items-start flex-col gap-4 px-2 py-4">
								<h2
									style={{
										fontSize: "1.25rem",
										fontWeight: "bold",
									}}
								>
									Purpose
								</h2>
								<p className="whitespace-pre-wrap">
									{toolData.purpose}
								</p>
							</div>
						) : null}
						{toolData.whenToUse ? (
							<div className="section flex justify-center items-start flex-col gap-4 px-2 py-4">
								<h2
									style={{
										fontSize: "1.25rem",
										fontWeight: "bold",
									}}
								>
									When to Use
								</h2>
								<p className="whitespace-pre-wrap">
									{toolData.whenToUse}
								</p>
							</div>
						) : null}
						{toolData.references ? (
							<div className="section flex justify-center items-start flex-col gap-4 px-2 py-4">
								<h2
									style={{
										fontSize: "1.25rem",
										fontWeight: "bold",
									}}
								>
									References
								</h2>
								<p className="whitespace-pre-wrap">
									{toolData.references}
								</p>
							</div>
						) : null}
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "2rem",
							}}
						>
							<ButtonBase
								role="link"
								onClick={() =>
									window.open(
										"https://amzn.to/3xvdJZy",
										"_blank"
									)
								}
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
										Buy the Book
									</Typography>
								</Paper>
							</ButtonBase>
						</Box>
					</>
				) : null}
			</section>
			{openJoinWaitlistPopup ? (
				<JoinWaitlist onClose={() => setOpenJoinWaitlistPopup(false)} />
			) : null}
		</>
	);
};

export default ToolsData;
