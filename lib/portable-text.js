import { getImageDimensions } from "@sanity/asset-utils";
import { urlForImage } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import { toPlainText } from "@portabletext/react";
import getSlug from "speakingurl";

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

const LinkableHeader = ({ children, value, level }) => {
	const slug = getSlug(toPlainText(value));
	const Element = `h${level}`;
	return <Element id={"heading-"+slug}>{children}</Element>;
};

const components = {
	types: {
		image: ImageComponent,
	},
	block: {
		h2: ({ children, value }) => (
			<LinkableHeader level={2} value={value}>
				{children}
			</LinkableHeader>
		),
		h3: ({ children, value }) => (
			<LinkableHeader level={3} value={value}>
				{children}
			</LinkableHeader>
		),
		h4: ({ children, value }) => (
			<LinkableHeader level={4} value={value}>
				{children}
			</LinkableHeader>
		),
		h5: ({ children, value }) => (
			<LinkableHeader level={5} value={value}>
				{children}
			</LinkableHeader>
		),
		h6: ({ children, value }) => (
			<LinkableHeader level={6} value={value}>
				{children}
			</LinkableHeader>
		),
	},
};

export default components;
