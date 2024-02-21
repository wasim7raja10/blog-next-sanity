// import { postQuery, postSlugsQuery } from "../../../lib/queries";
// import { sanityClient } from "../../../lib/sanity.server";
// import Post from "../../../components/post";

import Post from "@/components/post";
import { postQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";

// const PostPreview = lazy(() => import("../../../components/post-preview"));

// export async function generateStaticParams() {
// 	const paths = await sanityClient.fetch(postSlugsQuery);
// 	return paths.map((slug) => ({ slug }));
// }

export default async function Page({ params }) {
	const data = await sanityClient.fetch(postQuery, {
		slug: params.slug,
	});
	return <Post data={data} />;
	// return (
	// 	<>
	// 		<h1>{data.post.title}</h1>
	// 	</>
	// );
}

// export async function getStaticProps({ params, preview = false }) {
// 	const { post, morePosts } =

// 	return {
// 		props: {
// 			preview,
// 			data: {
// 				post,
// 				morePosts: overlayDrafts(morePosts),
// 			},
// 		},
// 		// If webhooks isn't setup then attempt to re-generate in 1 minute intervals
// 		revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
// 	};
// }

// export async function getStaticPaths() {
// 	const paths = await sanityClient.fetch(postSlugsQuery);
// 	return {
// 		paths: paths.map((slug) => ({ params: { slug } })),
// 		fallback: true,
// 	};
// }
