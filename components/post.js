import Container from "./container";
import PostHeader from "./post-header";
import ArticleBar from "./article-bar";
import PostBody from "./post-body";
import RelatedArticles from "./related-articles";
import { Separator } from "./ui/separator";
import MoreStories from "./more-stories";

export default function Post({ data = {} }) {
	// const router = useRouter();

	const { post, morePosts } = data;
	// const slug = post?.slug;

	// if (!router.isFallback && !slug) {
	// 	return <ErrorPage statusCode={404} />;
	// }

	return (
		<Container>
			{/* {router.isFallback ? (
				<PostTitle>Loading…</PostTitle>
			) : ( */}
			<>
				<main className="">
					{/* <Head>
								<title>{`${post.title} | ${BRAND_NAME}`}</title>
								{post.coverImage?.asset?._ref && (
									<meta
										key="ogImage"
										property="og:image"
										content={urlForImage(post.coverImage)
											.width(1200)
											.height(627)
											.fit("crop")
											.url()}
									/>
								)}
							</Head> */}
					<div className="lg:flex">
						<div className="flex-1 pt-6">
							<div className="flex">
								<aside className="w-64 hidden xl:block">
									{/* Content & Related article */}
									<div className="py-2 max-h-max">
										<RelatedArticles categories={post.categories} />
									</div>
								</aside>
								<article className="sm:mx-16 flex-1 max-w-[730px] space-y-8">
									<PostHeader
										title={post.title}
										coverImage={post.coverImage}
										date={post.date}
										author={post.author}
									/>
									<ArticleBar />
									<PostBody post={post} />
								</article>
							</div>
						</div>
						<aside className="w-60 hidden lg:block pt-6">
							{/* Ad */}
							<div className="py-2 h-[90vh] bg-black"></div>
						</aside>
					</div>
					<div className="sm:py-36 py-16">
						<Separator className="mb-16" />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</div>
				</main>
			</>
			{/* )} */}
		</Container>
	);
}
