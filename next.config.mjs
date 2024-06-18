/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		domains: ["v5.airtableusercontent.com"],
		unoptimized: true,
	},
};

export default nextConfig;
