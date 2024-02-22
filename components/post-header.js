import Link from "next/link";
import Avatar from "../components/avatar";
import Date from "../components/date";
import PostTitle from "../components/post-title";
import { badgeVariants } from "./ui/badge";

export default function PostHeader({
	title,
	coverImage,
	date,
	author,
	categories,
}) {
	return (
		<div className="space-y-4 w-full ">
			<PostTitle>{title}</PostTitle>
			<div className="flex items-center gap-2">
				{categories?.map((category) => (
					<Link
						key={category.slug}
						href={`/${category.slug}`}
						className={badgeVariants({ variant: "default" })}
					>
						#{category.name}
					</Link>
				))}
			</div>

			<div className="flex items-center gap-2 font-medium text-card-foreground-secondary text-sm">
				{author && <Avatar name={author.name} picture={author.picture} />}
				<span>/</span>
				<Date dateString={date} />
			</div>
		</div>
	);
}
