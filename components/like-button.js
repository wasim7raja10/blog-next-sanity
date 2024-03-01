"use client";

import { Heart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "./ui/use-toast";

export default function LikeButton({ isLiked, numLikes }) {
	const [isLikedState, setIsLikedState] = useState(isLiked);
	const [numLikeState, setNumLikeState] = useState(numLikes);
	const { toast } = useToast();

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
				setNumLikeState((curr) => curr + 1);
			} else {
				await supabase.from("likes").delete().match({ slug, user_id: user.id });
				setIsLikedState(false);
				setNumLikeState((curr) => curr - 1);
			}
		} else {
			toast({
				description: "Please log in to like the article.",
			});
		}
	}
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					className="flex items-center gap-2"
					onClick={handleLike}
					variant="ghost"
				>
					{isLikedState ? <Heart fill="red" stroke="red" /> : <Heart />}
					<span className="text-xl">{numLikeState}</span>
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>Like</p>
			</TooltipContent>
		</Tooltip>
	);
}
