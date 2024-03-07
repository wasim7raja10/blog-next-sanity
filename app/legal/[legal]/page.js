import Date from "@/components/date";
import { legalPageBySlugQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity.server";
import { PortableText } from "@portabletext/react";

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

	return (
		<div className="prose mx-auto max-w-screen-lg prose-h1:text-center prose-h1:text-3xl py-16">
			<PortableText value={data?.content} />
			<p>
				Last updated: <Date dateString={data?.date} />
			</p>
		</div>
	);
}

export const dynamicParams = false;
