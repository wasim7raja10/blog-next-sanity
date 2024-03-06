"use server";

import SearchSheet from "./search-sheet";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import { createClient } from "@/lib/supabase/server";
import HeaderLayout from "./header-layout";
// import { Bookmark } from "lucide-react";
// import { Button } from "./ui/button";

export default async function Header() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<HeaderLayout>
			{/* {user && (
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
						)} */}
			<SearchSheet />
			{user ? <LogoutButton /> : <LoginButton />}
		</HeaderLayout>
	);
}
