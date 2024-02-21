import { Roboto as FontSans } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

import "@/styles/index.css";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={cn("bg-background font-sans antialiased", fontSans.variable)}
			>
				<div className="min-h-screen">
					<Header />
					<main>{children}</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}
