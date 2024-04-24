export type ToolId = "negotiate" | "connect" | "create" | "choose";

export type ToolItem = {
	category: string;
	icon: string;
	text: string;
	slug: string;
	useCase: string;
};

export type Tool = {
	id: ToolId;
	label: string;
	icon: string;
	title: string;
	items: Array<ToolItem>;
	theme: {
		background: string;
	};
};

export type ToolViewOption = "category" | "useCase";
export type ViewableItem = { title: string; items: Array<ToolItem> };
