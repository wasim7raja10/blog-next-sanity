import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import indexer from "sanity-algolia";
import { algoliaPostProjection } from "@/lib/queries";
import algoliasearch from "algoliasearch";
import { createClient } from "next-sanity";

const algoliaServerClient = algoliasearch(
	process.env.ALGOLIA_APPLICATION_ID,
	process.env.ALGOLIA_ADMIN_API_KEY
);

const sanityClient = createClient({
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: true,
	apiVersion: "2022-03-13",
});

export async function POST(req) {
	try {
		// const { isValidSignature, body } = await parseBody(
		// 	req,
		// 	process.env.SANITY_REVALIDATE_SECRET
		// );

		const body = await req.json();

		// if (!isValidSignature) {
		// 	const message = "Invalid signature";
		// 	return new Response(JSON.stringify({ message, isValidSignature, body }), {
		// 		status: 401,
		// 	});
		// }

		if (!body?._type) {
			const message = "Bad Request";
			return new Response({ message, body }, { status: 400 });
		}

		const algoliaIndex = algoliaServerClient.initIndex(
			process.env.ALGOLIA_INDEX
		);

		const sanityAlgolia = indexer(
			{
				post: {
					index: algoliaIndex,
					projection: algoliaPostProjection,
				},
			},
			(document) => document
		);

		revalidateTag(body._type);

		await sanityAlgolia.webhookSync(sanityClient, body);

		return NextResponse.json({ status: 200, body });
	} catch (err) {
		console.error(err);
		return new Response({ err, body }, { status: 500 });
	}
}
