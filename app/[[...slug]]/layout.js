import CategoriesBar from "@/components/categories-bar";
import { getCategory } from "@/lib/get-category";

export default function Layout({ children, params }) {
	const currentCategory = getCategory(params);
	return (
		<section>
			<CategoriesBar currentCategory={currentCategory} />
			{children}
		</section>
	);
}
