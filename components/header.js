"use client";

import Container from "./container";
import Link from "next/link";
import Brand from "./brand";
import SearchSheet from "./search-sheet";

export default function Header() {
	return (
		<div className="bg-card py-4">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div>
						<SearchSheet />
					</div>
				</div>
			</Container>
		</div>
	);
}
