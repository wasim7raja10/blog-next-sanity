import { Roboto as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "../components/footer";
import Meta from "../components/meta";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["300", "400", "500", "700"],
});

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<div
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Header />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
