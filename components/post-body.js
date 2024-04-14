"use client";

import { PortableText } from "@portabletext/react";
import components from "@/lib/portable-text";

export default function PostBody({ post }) {
	const { content } = post;
	return (
		<div className="prose max-w-[70ch] md:prose-lg">
			<PortableText value={content} components={components} />
		</div>
	);
}
