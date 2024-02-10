import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/lib/sanity";
import { cn } from "@/lib/utils";

export default function PostBody({ content }) {
	return (
		<div className="prose prose-lg md:prose-xl prose-p:leading-8">
			<PortableText value={content} components={components} />
		</div>
	);
}

const ImageComponent = ({ value, isInline }) => {
	const { width, height } = getImageDimensions(value);
	return (
		<img
			src={urlForImage(value)}
			alt={value.alt || " "}
			loading="lazy"
			style={{ aspectRatio: width / height }}
			className={cn("block mx-auto", { "inline-block": isInline })}
		/>
	);
};

const components = {
	types: {
		image: ImageComponent,
	},
};
