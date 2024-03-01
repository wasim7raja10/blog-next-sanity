"use client";

import { Clipboard, List, Share2 } from "lucide-react";
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

export default function ArticleBar({ isBookmarked, isLiked, numLikes }) {
	return (
		<div className="border mx-auto max-w-max h-12 rounded-full px-3 sm:px-8 text-sm 2xl:h-14 flex gap-3 sm:gap-8 items-center sticky top-6 bg-white">
			<TooltipProvider delayDuration={0}>
				<LikeButton isLiked={isLiked} numLikes={numLikes} />
				<Separator orientation="vertical" className="h-6" />

				<BookmarkButton isBookmarked={isBookmarked} />
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

				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="ghost" size="icon">
							<Clipboard />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Copy link</p>
					</TooltipContent>
				</Tooltip>
				<Separator orientation="vertical" className="h-6" />

				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="ghost" size="icon">
							<Share2 />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Share</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
