import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import indexer from "sanity-algolia";
import { algoliaPostProjection } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";
import { algoliaServerClient } from "@/lib/algolia";

export async function POST(req) {
	try {
		// const { isValidSignature, body } = await parseBody(
		// 	req,
		// 	process.env.SANITY_REVALIDATE_SECRET
		// );

		// if (!isValidSignature) {
		// 	const message = "Invalid signature";
		// 	return new Response(JSON.stringify({ message, isValidSignature, body }), {
		// 		status: 401,
		// 	});
		// }

		const body = await req.json();

		console.log("body", body);

		if (!body?._type) {
			const message = "Bad Request";
			return new Response({ message, body }, { status: 400 });
		}

		revalidateTag(body._type);

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

		await sanityAlgolia.webhookSync(sanityClient, body);

		return NextResponse.json({ status: 200, body });
	} catch (err) {
		console.error(err);
		return new Response({ err, body }, { status: 500 });
	}
}
