import Avatar from "../components/avatar";
import Date from "../components/date";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<div className="pb-8 md:pb-14 space-y-4 w-full">
			<PostTitle>{title}</PostTitle>
			<div className="flex items-center gap-2 font-medium text-card-foreground-secondary text-sm">
				{author && <Avatar name={author.name} picture={author.picture} />}
				<span>/</span>
				<Date dateString={date} />
			</div>
		</div>
	);
}
