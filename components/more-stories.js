import HeroPost from "./hero-post";

export default function MoreStories({ posts }) {
	return (
		<>
			<h2 className="text-3xl font-medium pb-8">Read Next...</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{posts.map((post) => (
					<HeroPost
						key={post.slug}
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
