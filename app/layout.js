import { Roboto as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import "@/styles/index.css";
import Provider from "./provider";

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
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
