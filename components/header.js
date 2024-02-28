"use server";

import Container from "./container";
import Link from "next/link";
import Brand from "./brand";
import SearchSheet from "./search-sheet";
import { createClient } from "@/lib/supabase/server";
import SignoutButton from "./signout-button";
import LoginButton from "./login-button";

export default async function Header() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="bg-card py-4">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div className="flex items-center gap-4">
						<SearchSheet />
						{user ? <SignoutButton /> : <LoginButton />}
					</div>
				</div>
			</Container>
		</div>
	);
}
