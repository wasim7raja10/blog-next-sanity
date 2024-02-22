import { postListByCategoryQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";
import Link from "next/link";

export default async function RelatedArticles({ category }) {
	const data = await sanityClient.fetch(postListByCategoryQuery, {
		category: category.slug,
	});
	return (
		<>
			<h2 className="font-semibold pb-4 underline">Related articles:</h2>
			<ul className="space-y-3">
				{data.map((it) => (
					<li key={it.slug} className="font-medium hover:font-bold">
						<Link href={it.slug}>{it.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
