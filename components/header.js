"use client";

import Container from "./container";
import Link from "next/link";
import Brand from "./brand";
import SearchSheet from "./search-sheet";
import { Button } from "./ui/button";
import Login from "./login";

export default function Header() {
	return (
		<div className="bg-card py-4">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div className="flex items-center gap-4">
						<SearchSheet />
						<Link href={"/private"}>Private</Link>
						<Login />
					</div>
				</div>
			</Container>
		</div>
	);
}
