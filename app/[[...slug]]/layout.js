import CategoriesBar from "@/components/categories-bar";

export default function Layout({ children, params }) {
	const currentCategory = params.slug ? params.slug[0] : "explore";
	return (
		<section>
			<CategoriesBar currentCategory={currentCategory} />
			{children}
		</section>
	);
}
