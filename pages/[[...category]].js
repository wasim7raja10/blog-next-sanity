import {
	categoriesQuery,
	indexQuery,
	postListByCategoryQuery,
} from "../lib/queries";
import { getClient, overlayDrafts, sanityClient } from "../lib/sanity.server";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import Landing from "../components/landing";
import LandingLayout from "@/components/landing-layout";

export const LandingPreview = lazy(() =>
	import("../components/landing-preview")
);

export default function IndexPage({ allPosts, preview }) {
	if (preview) {
		return (
			<PreviewSuspense fallback="Loading...">
				<LandingPreview allPosts={allPosts} />
			</PreviewSuspense>
		);
	}

	return <Landing allPosts={allPosts} />;
}

export async function getStaticProps({ params, preview = false }) {
	let allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
	if (params.category) {
		allPosts = overlayDrafts(
			await getClient(preview).fetch(postListByCategoryQuery, {
				category: params.category[0],
			})
		);
	}
	return {
		props: {
			allPosts,
			preview,
		},
		// If webhooks isn't setup then attempt to re-generate in 1 minute intervals
		revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
	};
}

export async function getStaticPaths() {
	const paths = await sanityClient.fetch(categoriesQuery);
	return {
		paths: paths
			.map((cat) => ({ params: { category: [cat.slug] } }))
			.concat({ params: { category: false } }),
		fallback: true,
	};
}

IndexPage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
