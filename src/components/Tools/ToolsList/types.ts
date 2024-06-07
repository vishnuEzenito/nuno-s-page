export type ToolId = string;

export type ToolItem = {
	category: string;
	icon: string;
	text: string;
	slug: string;
	useCase: string;
	id:string
};

export type Tool = {
	index: number;
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
