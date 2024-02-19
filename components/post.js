import { useRouter } from "next/router";
import { urlForImage } from "../lib/sanity";
import ErrorPage from "next/error";
import Layout from "./layout";
import Container from "./container";
import PostTitle from "./post-title";
import Head from "next/head";
import { BRAND_NAME } from "../lib/constants";
import PostHeader from "./post-header";
import PostBody from "./post-body";
import MoreStories from "./more-stories";
import ContentOutline from "./content-outline";
import { Separator } from "./ui/separator";
import Link from "next/link";
import ArticleBar from "./article-bar";

export default function Post({ data = {}, preview = false }) {
	const router = useRouter();

	const { post, morePosts } = data;
	const slug = post?.slug;

	if (!router.isFallback && !slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout preview={preview}>
			<Container>
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<main className="">
							<Head>
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
							</Head>
							<div className="lg:flex">
								<div className="flex-1 pt-6">
									<div className="flex">
										<aside className="w-64 hidden xl:block">
											{/* Content & Related article */}
											<div className="py-2 max-h-max">
												<h2 className="font-semibold pb-4 underline">
													Related articles:
												</h2>
												<ul className="space-y-3">
													{morePosts.map((it) => (
														<li
															key={it.slug}
															className="font-medium hover:font-bold"
														>
															<Link href={it.slug}>{it.title}</Link>
														</li>
													))}
												</ul>
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
											<PostBody content={post.content} />
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
				)}
			</Container>
		</Layout>
	);
}
