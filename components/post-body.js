import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import { PortableText, toPlainText } from "@portabletext/react";
import getSlug from "speakingurl";
import components from "@/lib/portable-text";

export default function PostBody({ content }) {
	return (
		<div className="prose prose-lg md:prose-xl prose-p:leading-8">
			<PortableText value={content} components={components} />
		</div>
	);
}
