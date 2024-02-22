"use client";

import { Bookmark, Heart, Link, List, Share2 } from "lucide-react";
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
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import ContentOutline from "./content-outline";
import { ScrollArea } from "./ui/scroll-area";

export default function ArticleBar() {
	return (
		<div className="border mx-auto max-w-max h-12 rounded-full px-3 sm:px-8 text-sm 2xl:h-14 flex gap-3 sm:gap-8 items-center sticky top-10 bg-white">
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="ghost" size="icon">
							<Heart />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Like</p>
					</TooltipContent>
				</Tooltip>
				<Separator orientation="vertical" className="h-6" />

				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="ghost" size="icon">
							<Bookmark />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Bookmark</p>
					</TooltipContent>
				</Tooltip>
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
							<Link />
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

{
	/* <Dialog>ok</Dialog> */
}
{
	/* <Dialog>
					<DialogTrigger asChild>Trigger</DialogTrigger>
					<DialogContent>Content</DialogContent>
				</Dialog> */
}
{
	/* <Dialog>
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
					</Tooltip> */
}
{
	/* <DialogContent className="sm:max-w-[630px] max-w-[90%] rounded-lg">
						<DialogHeader>
							<DialogTitle className="sm:px-2">Content Outline</DialogTitle>
						</DialogHeader>
						<ScrollArea className="max-h-[400px]">
							<ContentOutline />
						</ScrollArea>
					</DialogContent> */
}
{
	/* </Dialog> */
}
