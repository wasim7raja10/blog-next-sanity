import CategoriesBar from "@/components/categories-bar";
import { getCategory } from "@/lib/get-category";

export default function Layout({ children, params }) {
	const currentCategory = params.slug ? params.slug[0] : "explore";

	console.log(params);
	return (
		<section>
			<CategoriesBar currentCategory={currentCategory} />
			{JSON.stringify(params)}
			{children}
		</section>
	);
}
