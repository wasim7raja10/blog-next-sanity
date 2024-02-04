import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
	isSmall,
}) {
	return (
		<Link href={`/posts/${slug}`}>
			<div
				className={cn(
					"bg-card max-w-[340px] rounded-md overflow-hidden space-y-3",
					{
						"flex max-w-full space-y-0": isSmall,
					}
				)}
			>
				<div
					className={cn(
						{ "h-60 w-full": !isSmall },
						{
							"sm:min-h-[150px] min-h-[94px] sm:min-w-[192px] min-w-[120px]":
								isSmall,
						}
					)}
				>
					<CoverImage slug={slug} title={title} image={coverImage} priority />
				</div>
				<div
					className={cn("px-4 pb-4 space-y-4 w-full", {
						"p-2 sm:p-4 flex flex-col justify-between sm:justify-start":
							isSmall,
					})}
				>
					<h3 className="text-xl tracking-wide leading-6 text-card-foreground font-medium line-clamp-2">
						{title}
					</h3>
					{/* <p className="mb-4 text-lg leading-relaxed">{excerpt}</p> */}
					<div className="flex justify-between items-center text-xs text-card-foreground-secondary">
						{author && <Avatar name={author.name} picture={author.picture} />}
						<div>
							<Date dateString={date} />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
