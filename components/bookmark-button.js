"use client";

import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { createClient } from "@/lib/supabase/client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export default function BookmarkButton({ isBookmarked = false }) {
	const [isBookmarkedState, setIsBookmarkedState] = useState(isBookmarked);
	const { toast } = useToast();

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
				await supabase
					.from("bookmarks")
					.delete()
					.match({ slug, user_id: user.id });
				setIsBookmarkedState(false);
			}
		} else {
			toast({
				description: "Please log in to bookmark the article.",
			});
		}
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button onClick={handleBookmark} variant="ghost" size="icon">
					{isBookmarkedState ? <Bookmark fill="black" /> : <Bookmark />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>Bookmark</p>
			</TooltipContent>
		</Tooltip>
	);
}
