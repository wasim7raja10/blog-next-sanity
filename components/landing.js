import Layout from "./layout";
import Head from "next/head";
import { BRAND_NAME } from "../lib/constants";
import Container from "./container";
import HeroPost from "./hero-post";
import CategoriesBar from "./categories-bar";

export default function Landing({ allPosts }) {
	return (
		<>
			<div className="grid grid-cols-3 gap-10 mx-auto max-w-max mb-40">
				{allPosts.map((it) => (
					<HeroPost
						key={it.slug}
						title={it.title}
						coverImage={it.coverImage}
						date={it.date}
						author={it.author}
						slug={it.slug}
						excerpt={it.excerpt}
					/>
				))}
			</div>
		</>
	);
}
