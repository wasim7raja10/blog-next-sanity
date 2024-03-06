export function getCategory(params) {
	if (params.slug && params.slug !== "index") return params.slug[0];
	return "explore";
}
