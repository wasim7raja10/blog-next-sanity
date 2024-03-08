import HeroPost from "@/components/hero-post";
import { getCategory } from "@/lib/get-category";
import {
	categoriesQuery,
	indexQuery,
	postListByCategoryQuery,
} from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity.server";

export async function generateStaticParams() {
	const categories = await sanityFetch({
		query: categoriesQuery,
		tags: ["category"],
	});

	return categories
		.map((category) => ({
			slug: [category.slug],
		}))
		.concat({ slug: false });
}

export default async function Page({ params }) {
	const category = params.slug ? params.slug[0] : undefined;

	let posts = [];

	if (category) {
		posts = await sanityFetch({
			query: postListByCategoryQuery,
			qParams: { category },
			tags: ["post"],
		});
	} else {
		posts = await sanityFetch({ query: indexQuery, tags: ["post"] });
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-max pb-24">
			{posts.length > 0 &&
				posts.map((it) => (
					<HeroPost
						key={it.slug}
						title={it.title}
						coverImage={it.coverImage}
						date={it.date}
						author={it.author}
						slug={it.slug}
						excerpt={it.excerpt}
						category={it.categories[0]}
					/>
				))}
		</div>
	);
}

export const dynamicParams = false;
