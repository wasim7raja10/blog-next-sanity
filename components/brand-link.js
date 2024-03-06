"use client";

import Link from "next/link";
import Brand from "./brand";

export default function BrandLink() {
	return (
		<Link href="/">
			<Brand />
		</Link>
	);
}
