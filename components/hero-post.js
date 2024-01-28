import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<div className="bg-card max-w-[340px]">
			<div className="h-60">
				<CoverImage slug={slug} title={title} image={coverImage} priority />
			</div>
			<div className="">
				<div>
					<h3 className="mb-4 leading-tight">
						<Link href={`/posts/${slug}`} className="hover:underline">
							{title}
						</Link>
					</h3>
				</div>
				<p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
				<div className="flex justify-between">
					{author && <Avatar name={author.name} picture={author.picture} />}
					<div className="mb-4 text-lg md:mb-0">
						<Date dateString={date} />
					</div>
				</div>
			</div>
		</div>
	);
}
