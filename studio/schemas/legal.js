export const legal = {
	name: "legal",
	title: "Legal",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }, { type: "image" }],
		},
		{
			name: "date",
			title: "Date",
			type: "datetime",
		},
	],
	preview: {
		select: {
			title: "title",
		},
		prepare(selection) {
			const { title } = selection;
			return { ...selection, subtitle: title };
		},
	},
};
