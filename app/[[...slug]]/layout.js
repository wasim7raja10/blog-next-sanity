import CategoriesBar from "@/components/categories-bar";
import { categoriesQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity.server";

export default async function Layout({ children, params }) {
	const currentCategory = params.slug ? params.slug[0] : "explore";

	const data = await sanityFetch({
		query: categoriesQuery,
		tags: ["category"],
	});

	return (
		<section>
			<CategoriesBar currentCategory={currentCategory} data={data} />
			{JSON.stringify(params)}
			{children}
		</section>
	);
}
