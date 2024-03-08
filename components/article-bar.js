"use client";

import { List } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import ContentOutline from "./content-outline";
import { ScrollArea } from "./ui/scroll-area";
import BookmarkButton from "./bookmark-button";
import LikeButton from "./like-button";
import ClipboardButton from "./clipboard-button";
import ShareButton from "./share-button";

export default function ArticleBar({
	isBookmarked,
	isLiked,
	numLikes,
	post_id,
}) {
	return (
		<div className="border mx-auto max-w-max h-12 rounded-full px-2 sm:px-8 text-sm 2xl:h-14 flex gap-2 sm:gap-8 items-center sticky top-6 bg-white">
			<TooltipProvider delayDuration={0}>
				<LikeButton isLiked={isLiked} numLikes={numLikes} post_id={post_id} />
				<Separator orientation="vertical" className="h-6" />

				<BookmarkButton isBookmarked={isBookmarked} post_id={post_id} />
				<Separator orientation="vertical" className="h-6" />

				<Dialog>
					<Tooltip>
						<TooltipTrigger asChild>
							<DialogTrigger asChild>
								<Button variant="ghost" size="icon">
									<List />
								</Button>
							</DialogTrigger>
						</TooltipTrigger>
						<TooltipContent>
							<p>Content outline</p>
						</TooltipContent>
					</Tooltip>
					<DialogContent className="sm:max-w-[630px] max-w-[90%] rounded-lg">
						<DialogHeader>
							<DialogTitle className="sm:px-2">Content Outline</DialogTitle>
						</DialogHeader>
						<ScrollArea className="max-h-[400px]">
							<ContentOutline />
						</ScrollArea>
					</DialogContent>
				</Dialog>
				<Separator orientation="vertical" className="h-6" />

				<ClipboardButton />
				<Separator orientation="vertical" className="h-6" />

				<ShareButton />
			</TooltipProvider>
		</div>
	);
}
