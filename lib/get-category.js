export function getCategory(params) {
	if (params.slug && params.slug[0] !== "index") return params.slug[0];
	return "explore";
}
