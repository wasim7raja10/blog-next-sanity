import Layout from "./layout";
import Head from "next/head";
import { BRAND_NAME } from "../lib/constants";
import Container from "./container";
import HeroPost from "./hero-post";
import MoreStories from "./more-stories";
import CategoriesBar from "./categories-bar";

export default function Landing({ allPosts, allCategories, preview }) {
	const [heroPost, ...morePosts] = allPosts || [];
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>{`${BRAND_NAME} | Home`}</title>
				</Head>
				<Container>
					{allCategories && <CategoriesBar allCategories={allCategories} />}
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
}
