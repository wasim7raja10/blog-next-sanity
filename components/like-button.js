"use client";

import { Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LikeButton({ isLiked = false }) {
	const [isLikedState, setIsLikedState] = useState(isLiked);

	const pathname = usePathname();
	const slug = pathname.split("/").at(2);

	async function handleLike() {
		const supabase = createClient();

		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (user) {
			if (!isLikedState) {
				await supabase.from("likes").insert({ slug });
				setIsLikedState(true);
			} else {
				await supabase.from("likes").delete().match({ slug, user_id: user.id });
				setIsLikedState(false);
			}
		}
	}
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button onClick={handleLike} variant="ghost" size="icon">
					{isLikedState ? <Heart fill="red" stroke="red" /> : <Heart />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>Like</p>
			</TooltipContent>
		</Tooltip>
	);
}
