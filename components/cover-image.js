import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function CoverImage({ title, slug, image: source, priority }) {
	const image = source?.asset?._ref ? (
		<div className="shadow-small object-cover h-full w-full">
			<Image
				className="h-full w-full"
				height={0}
				width={0}
				alt={`Cover Image for ${title}`}
				src={urlForImage(source).height(240).width(340).url()}
				sizes="100vw"
				priority={priority}
			/>
		</div>
	) : (
		<div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
	);

	return <>{image}</>;
}
