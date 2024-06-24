// useProductList.js
import { HomeData } from "@/lib/constants";
import axios from "axios";
import { Tool } from "../../components/Tools/ToolsList/types";

const useProductList = () => {
	const fetchBookData = async () => {
		try {
			const response = await axios.get(
				"https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblqllWO03N90JhcL",
				{
					headers: {
						Authorization:
							"Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92",
					},
				}
			);

			// Update HomeData with the fetched data
			HomeData.books.records = response.data.records;

			return response.data;
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	};
	const fetchAssessmentData = async () => {
		try {
			const response = await axios.get(
				"https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblz00iwd6V4uDbir",
				{
					headers: {
						Authorization:
							"Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92",
					},
				}
			);

			// Update HomeData with the fetched data
			HomeData.AssessmentData.list = response.data.records;

			return response.data;
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	};
	const fetchBlogData = async () => {
		try {
			const response = await axios.get(
				"https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblVPg1eQVIkETUT0",
				{
					headers: {
						Authorization:
							"Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92",
					},
				}
			);

			// Update HomeData with the fetched data
			HomeData.blogapi.records = response.data.records;

			return response.data;
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	};

	const fetchCanvasData = async () => {
		try {
			const response = await axios.get(
				"https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblo4io5mWE9l6evk",
				{
					headers: {
						Authorization:
							"Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92",
					},
				}
			);

			// Update HomeData with the fetched data
			HomeData.canvas.list = response.data.records;

			return response.data;
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	};

	const fetchtoolsData = async () => {
		try {
			// First API call to fetch categories
			const response = await axios.get(
				"https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblluDuVZJz1CaRdH",
				{
					headers: {
						Authorization:
							"Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92",
					},
				}
			);

			const toolslist = await axios.get(
				"https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblG7NksTQd4ni6lR",
				{
					headers: {
						Authorization:
							"Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92",
					},
				}
			);
			console.log("res", response.data);
			console.log("toolslist", toolslist.data);

			const tools: Array<Tool> = [];
			if (response) {
				response.data.records.forEach((item: any, index: number) => {
					tools.push({
						index: item.fields.index,
						id: item.fields.Sectionid,
						title: item.fields.title,
						label: item.fields.label,
						icon: item.fields.icon,
						theme: {
							background: item.fields.background,
						},
						items: [],
					});
				});
			}
			// Second API call to fetch items
			const sortedData = tools.sort((a, b) => a.index - b.index);
			console.log("both data", toolslist.data, response.data);

			if (toolslist.data && response.data) {
				console.log("at least got in");
				toolslist.data.records.forEach((item: any, index: number) => {
					// Find the corresponding category by id and add the item
					const category = sortedData.find(
						(tool) => tool.id === item.fields.Sectionid[0]
					);

					if (category) {
						category.items.push({
							text: item?.fields?.Toolname,
							category: item?.fields?.category,
							useCase: item?.fields?.useCase,
							slug: item?.fields?.uuid,
							icon: item?.fields?.icon?.[0]?.url,
							id: item?.fields?.Sectionid?.[0],
						});
					}
				});
				console.log("sortedData", sortedData);
				return sortedData;
			}
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	};
	const fetchToolData = async (toolId: string) => {
		try {
			// First API call to fetch categories
			const response = await axios.get(
				"https://api.airtable.com/v0/appkag7HFvxhwiXEZ/tblG7NksTQd4ni6lR",
				{
					headers: {
						Authorization:
							"Bearer pat9cAthirGMPjk5c.6cebe3aa68a3f577cb950574f95b5938742ac40b9191fe2cf8b2d96a5e841b92",
					},
				}
			);
			const records = response.data.records;
			const toolData = records.find(
				(record: any) => record?.fields?.uuid === toolId
			)?.fields;
			return toolData;
		} catch (error) {
			console.error("Error fetching data:", error);
			return null;
		}
	};

	return {
		fetchBookData,
		fetchAssessmentData,
		fetchBlogData,
		fetchtoolsData,
		fetchToolData,
		fetchCanvasData,
	};
};

export default useProductList;
