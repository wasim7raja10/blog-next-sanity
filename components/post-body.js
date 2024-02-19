import { PortableText } from "@portabletext/react";
import components from "@/lib/portable-text";

export default function PostBody({ content }) {
	return (
		<div className="prose prose-lg md:prose-xl prose-p:leading-8">
			<PortableText value={content} components={components} />
		</div>
	);
}
