import Layout from "./layout";
import Head from "next/head";
import { BRAND_NAME } from "../lib/constants";
import Container from "./container";
import HeroPost from "./hero-post";
import CategoriesBar from "./categories-bar";

export default function LandingLayout({ children }) {
	return (
		<>
			<Layout>
				<Head>
					<title>{`${BRAND_NAME} | Home`}</title>
				</Head>
				<Container>
					<CategoriesBar />
					{children}
				</Container>
			</Layout>
		</>
	);
}
