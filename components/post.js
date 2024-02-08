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
import SectionSeparator from "./section-separator";
import MoreStories from "./more-stories";

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
						<article className="">
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
								<div className="w-60 hidden lg:block">
									<div className="top-2 sticky max-h-max">top-2 sticky</div>
								</div>
								<div className="sm:px-8 pt-10 flex-1">
									<PostHeader
										title={post.title}
										coverImage={post.coverImage}
										date={post.date}
										author={post.author}
									/>
									<PostBody content={post.content} />
								</div>
								<div className="w-60 hidden lg:block">
									<div className="top-2 sticky max-h-max">top-2 sticky</div>
								</div>
							</div>
						</article>
						<SectionSeparator />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</>
				)}
			</Container>
		</Layout>
	);
}
