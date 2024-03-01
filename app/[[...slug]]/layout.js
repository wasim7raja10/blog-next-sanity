import CategoriesBar from "@/components/categories-bar";

export default function Layout({ children, params }) {
	let currentCategory = null;

	if (params.slug) {
		if (params.slug[0] !== "index") {
			currentCategory = params.slug[0];
		} else {
			currentCategory = "index";
		}
	} else {
		currentCategory = "index";
	}

	return (
		<section>
			<CategoriesBar currentCategory={currentCategory} />
			{children}
		</section>
	);
}
