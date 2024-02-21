import { categoriesQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";

export async function generateStaticParams() {
	const posts = await sanityClient.fetch(categoriesQuery);
	console.log("params", posts);
	return posts.map((post) => ({
		category: post.slug,
	}));
}

export default function Page({ params }) {
	console.log(params);
	return (
		<>
			<h1>{params.category}</h1>
		</>
	);
}
