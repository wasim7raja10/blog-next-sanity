import { algoliaServerClient } from "@/lib/algolia";
import { algoliaIndexQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";
import { NextResponse } from "next/server";

export async function GET() {
	const posts = await sanityClient.fetch(algoliaIndexQuery);
	const index = algoliaServerClient.initIndex(process.env.ALGOLIA_INDEX);

	try {
		console.time(`Saving ${posts.length} documents to index:`);
		await index.saveObjects(posts);
		console.timeEnd(`Saving ${posts.length} documents to index:`);
		return NextResponse.json({
			status: 200,
			body: "Success!",
		});
	} catch (err) {
		console.error(err);
		return new Response(err.message, { status: 500 });
	}
}
