import PostHeader from "./post-header";
import ArticleBar from "./article-bar";
import PostBody from "./post-body";
import RelatedArticles from "./related-articles";
import { Separator } from "./ui/separator";
import MoreStories from "./more-stories";
import { createClient } from "@/lib/supabase/server";

export default async function Post({ data = {} }) {
	const { post, morePosts } = data;

	const supabase = createClient();

	let isBookmarked = false,
		isLiked = false;

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		isBookmarked =
			(await supabase.from("bookmarks").select().match({ slug: post.slug }))
				.data.length > 0;
	}

	return (
		<main className="">
			<div className="lg:flex">
				<div className="flex-1 pt-6">
					<div className="flex">
						<aside className="w-64 hidden xl:block">
							{/* Content & Related article */}
							<div className="py-2 max-h-max">
								<RelatedArticles
									categories={post.categories}
									excludedSlug={post.slug}
								/>
							</div>
						</aside>
						<article className="sm:mx-16 flex-1 max-w-[730px] space-y-8">
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
								categories={post.categories}
							/>
							<ArticleBar isBookmarked={isBookmarked} />
							<PostBody post={post} />
						</article>
					</div>
				</div>
				<aside className="w-60 hidden lg:block pt-6">
					{/* Ad */}
					<div className="py-2 h-[90vh]"></div>
				</aside>
			</div>
			<div className="sm:py-36 py-16">
				<Separator className="mb-16" />
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</div>
		</main>
	);
}
