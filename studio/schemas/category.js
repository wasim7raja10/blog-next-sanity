export const category = {
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: "description",
			title: "Description",
			type: "text",
      rows: 3,
		},
		{
			name: "picture",
			title: "Picture",
			type: "image",
			options: { hotspot: true },
		},
	],
};
