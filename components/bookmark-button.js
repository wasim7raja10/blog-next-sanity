"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { createClient } from "@/lib/supabase/client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BookmarkButton({ isBookmarked = false }) {
	const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked);

	const pathname = usePathname();
	const slug = pathname.split("/").at(2);

	async function handleBookmark() {
		const supabase = createClient();

		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (user) {
			if (!isBookmarkedState) {
				await supabase.from("bookmarks").insert({
					slug,
				});
				setIsBookmarkedState(true);
			} else {
				await supabase.from("bookmarks").delete().match({ slug });
				setIsBookmarkedState(false);
			}
		}
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button onClick={handleBookmark} variant="ghost" size="icon">
					{isBookmarkedState ? <BookmarkCheck /> : <Bookmark />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>Bookmark</p>
			</TooltipContent>
		</Tooltip>
	);
}
