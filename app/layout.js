import { Roboto as FontSans } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

import "@/styles/index.css";
import Container from "@/components/container";
import { Toaster } from "@/components/ui/toaster";

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
					<main>
						<Container>{children}</Container>
					</main>
				</div>
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
