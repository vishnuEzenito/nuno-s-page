// function to declare class names while using modular styling files
export const stylesConfig =
	(styles: any, prefix: string = "") =>
	(...args: any[]) => {
		const classes: any[] = [];
		args.forEach((arg) => {
			if (typeof arg === "string")
				classes.push(styles[`${prefix}${arg}`]);
			else if (typeof arg === "object")
				Object.keys(arg).forEach((key) => {
					if (arg[key]) classes.push(styles[`${prefix}${key}`]);
				});
		});
		return classes.join(" ");
	};
