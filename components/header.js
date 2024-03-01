"use server";

import Container from "./container";
import Link from "next/link";
import Brand from "./brand";
import SearchSheet from "./search-sheet";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";

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
						<div className="w-[120px] sm:w-[150px]">
							<Brand />
						</div>
					</Link>
					<div className="flex items-center sm:gap-4">
						{user && (
							<Button
								className="bg-card hover:bg-background rounded-full"
								variant="ghost"
								size="icon"
								asChild
							>
								<Link href={"/bookmarks"}>
									<Bookmark size={20} />
								</Link>
							</Button>
						)}
						<SearchSheet />
						{user ? <LogoutButton /> : <LoginButton />}
					</div>
				</div>
			</Container>
		</div>
	);
}
