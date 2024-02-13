import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import { PortableText, toPlainText } from "@portabletext/react";
import getSlug from "speakingurl";

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

const LinkableHeader = ({ children, value }) => {
	// `value` is the single Portable Text block of this header
	const slug = getSlug(toPlainText(value));
	return <h2 id={slug}>{children}</h2>;
};

const components = {
	types: {
		image: ImageComponent,
	},
	block: {
		h2: LinkableHeader,
		h3: LinkableHeader,
		h4: LinkableHeader,
		h5: LinkableHeader,
		h6: LinkableHeader,
	},
};
