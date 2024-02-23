import Post from "@/components/post";
import { postQuery, postSlugsQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity.server";

export async function generateStaticParams() {
	const paths = await sanityFetch({ query: postSlugsQuery, tags: ["post"] });
	return paths.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
	const data = await sanityFetch({
		query: postQuery,
		qParams: { slug: params.slug },
		tags: ["post"],
	});
	return <Post data={data} />;
}

export const dynamicParams = false;
