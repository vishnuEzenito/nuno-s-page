"use client";

import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Container,
	useMediaQuery,
	useTheme,
	Box,
	Divider,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { RxCross2 } from "react-icons/rx";

interface NavBarProps {
	activeComponent: string;
}

export default function StoreNavBar({ activeComponent }: NavBarProps) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
	const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

	const menuItems = [
		{
			id: 0,
			icon: <ShoppingCartIcon />,
			title: "Home",
			url: "/",
		},
		{
			id: 1,
			icon: <BusinessIcon />,
			title: "Tools",
			url: "/tools",
		},
		{
			id: 2,
			icon: <PhoneIcon />,
			title: "Learn",
			url: "/learn",
		},
		{
			id: 3,
			icon: <PhoneIcon />,
			title: "Teach",
			url: "/teach",
		},
		{
			id: 4,
			icon: <StorefrontIcon />,
			title: "Author",
			url: "/author",
		},
		{
			id: 5,
			icon: <StorefrontIcon />,
			title: "Contact",
			url: "/contact",
		},
	];

	return (
		<>
			<link
				href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
				rel="stylesheet"
			/>

			<AppBar
				position="sticky"
				elevation={0}
				sx={{
					background: "#fff",
					top: 0,
					pt: "0.5rem",
					pb: "0.75rem",
					px: isMobile
						? "1rem"
						: isMediumScreen
							? "3rem"
							: isLargeScreen
								? "3rem"
								: isExtraLargeScreen
									? "3rem"
									: "3rem",
				}}
			>
				<Toolbar sx={{ p: "0.5rem" }}>
					{isMobile && (
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={() => setIsMenuOpen(true)}
						>
							<MenuRoundedIcon
								sx={{
									height: "40px",
									width: "40px",
									color: "#888888",
								}}
							/>
						</IconButton>
					)}
					<Drawer
						anchor="left"
						open={isMenuOpen}
						onClose={() => setIsMenuOpen(false)}
						sx={{
							width: "80%", // Adjust the width of the Drawer as needed
							flexShrink: 0, // Fix for IE 11
							"& .MuiDrawer-paper": {
								width: "80%", // Adjust the width of the Drawer paper as needed
								boxSizing: "border-box",
							},
						}}
					>
						<List sx={{ px: "1rem" }}>
							<Typography
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									textAlign: "center",
									mb: "2rem",
								}}
							>
								<Image
									src={"/assets/impneglogo.svg"}
									width={295}
									height={30}
									alt="logo"
								/>
							</Typography>
							{menuItems.map((item) => (
								<ListItem button key={item.id}>
									<Link href={item.url}>
										<ListItemText
											primary={item.title}
											sx={{
												"& .css-10hburv-MuiTypography-root":
													{
														fontFamily:
															"CircularStd, sans-serif",
														fontWeight: 400,
														fontSize: "20px",
														color:
															activeComponent ===
															item.url
																? "#000"
																: "#333", // Change color for active page
														borderBottom:
															activeComponent ===
															item.url
																? "2px solid #B34038"
																: "none", // Add line under active page
													},
											}}
										/>
									</Link>
								</ListItem>
							))}
						</List>
					</Drawer>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, ml: isMobile ? "25%" : "0rem" }}
					>
						<Link href={"/"}>
							<Image
								src={"/assets/impneglogo.svg"}
								width={295}
								height={30}
								alt="logo"
							/>
						</Link>
					</Typography>
					{!isMobile && (
						<Box
							sx={{
								display: "flex",
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
									<ListItemText
										primary={item.title}
										sx={{
											color: "#333",
											borderBottom:
												activeComponent === item.url
													? "2px solid #B34038"
													: "none", // Add line under active page
											"& .css-10hburv-MuiTypography-root":
												{
													fontFamily:
														"CircularStd, sans-serif",
													fontWeight: 400,
													fontSize: "18px",
													color: "#333", // Change color for active page
												},
										}}
									/>
								</Link>
							))}
						</Box>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
}
