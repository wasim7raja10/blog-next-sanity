import { categoriesQuery, indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import Landing from "../components/landing";

const LandingPreview = lazy(() => import("../components/landing-preview"));

export default function IndexPage({ allPosts, allCategories, preview }) {
	if (preview) {
		return (
			<PreviewSuspense fallback="Loading...">
				<LandingPreview allPosts={allPosts} />
			</PreviewSuspense>
		);
	}

	return <Landing allPosts={allPosts} allCategories={allCategories} />;
}

export async function getStaticProps({ preview = false }) {
	const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
	const allCategories = overlayDrafts(
		await getClient(preview).fetch(categoriesQuery)
	);
	return {
		props: { allPosts, allCategories, preview },
		// If webhooks isn't setup then attempt to re-generate in 1 minute intervals
		revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
	};
}
