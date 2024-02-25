import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import indexer from "sanity-algolia";
import { algoliaServerClient } from "@/lib/algolia";
import { sanityClient } from "@/lib/sanity.server";

export async function POST(req) {
	try {
		const { isValidSignature } = await parseBody(
			req,
			process.env.SANITY_REVALIDATE_SECRET
		);

		const { body } = req;

		if (!isValidSignature) {
			const message = "Invalid signature";
			return new Response(JSON.stringify({ message, isValidSignature, body }), {
				status: 401,
			});
		}

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
					projection: algoliaPostField,
				},
			},
			(document) => document
		);

		revalidateTag(body._type);

		return sanityAlgolia.webhookSync(sanityClient, body).then(() =>
			NextResponse.json({
				status: 200,
				body,
			})
		);
	} catch (err) {
		console.error(err);
		return new Response(err.message, { status: 500 });
	}
}
