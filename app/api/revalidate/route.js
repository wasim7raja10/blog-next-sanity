import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import indexer from "sanity-algolia";
import { algoliaPostProjection } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";
import { algoliaServerClient } from "@/lib/algolia";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
	try {
		const { body, isValidSignature } = await parseBody(
			req,
			process.env.SANITY_REVALIDATE_SECRET
		);

		console.log("body", body);

		if (!isValidSignature) {
			return new Response("Invalid Signature", { status: 401 });
		}

		if (!body?._type) {
			const message = "Bad Request";
			return new Response({ message, body }, { status: 400 });
		}

		revalidateTag(body?._type);

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

		await sanityAlgolia.webhookSync(sanityClient, { ids: body?.ids });

		return NextResponse.json({ status: 200, body });
	} catch (err) {
		console.error(err);
		return new Response({ err, body }, { status: 500 });
	}
}
