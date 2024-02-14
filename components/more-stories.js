import HeroPost from "./hero-post";

export default function MoreStories({ posts }) {
	return (
		<>
			<h2 className="">Read Next</h2>
			<div className="grid grid-cols-2 gap-10">
				{posts.map((post) => (
					<HeroPost
						isSmall
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						author={post.author}
						slug={post.slug}
						excerpt={post.excerpt}
					/>
				))}
			</div>
		</>
	);
}
