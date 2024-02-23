import HeroPost from "@/components/hero-post";
import {
	categoriesQuery,
	indexQuery,
	postListByCategoryQuery,
} from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";

export async function generateStaticParams() {
	const posts = await sanityClient.fetch(categoriesQuery);

	return posts
		.map((post) => ({
			slug: [post.slug],
		}))
		.concat({ slug: false });
}

export default async function Page({ params }) {
	const category = params.slug ? params.slug[0] : undefined;

	let posts = [];

	if (category) {
		posts = await sanityClient.fetch(postListByCategoryQuery, {
			category,
		});
	} else {
		posts = await sanityClient.fetch(indexQuery);
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-max mb-40">
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
