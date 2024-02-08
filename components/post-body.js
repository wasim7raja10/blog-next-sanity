import { PortableText } from "@portabletext/react";

export default function PostBody({ content }) {
	return (
		<div className="prose prose-lg md:prose-xl prose-p:leading-8">
			<PortableText value={content} />
		</div>
	);
}
