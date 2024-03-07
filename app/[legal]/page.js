import Post from "@/components/post";
import { legalPageBySlugQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity.server";

export async function generateStaticParams() {
	const legalPages = [
		{ legal: "terms-of-use" },
		{ legal: "about-us" },
		{ legal: "privacy-policy" },
	];
	return legalPages;
}

export default async function Page({ params }) {
	const data = await sanityFetch({
		query: legalPageBySlugQuery,
		qParams: { slug: params.legal },
		tags: ["legal"],
	});
	return <div>{JSON.stringify(data)}</div>;
}

export const dynamicParams = false;
