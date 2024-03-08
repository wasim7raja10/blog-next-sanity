"use client";

import { Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	RedditIcon,
	RedditShareButton,
	TwitterShareButton,
	XIcon,
} from "react-share";
import { useEffect } from "react";

export default function ShareButton({
	title,
	hashtags,
	url = "",
	originUrl = "",
}) {
	useEffect(() => {
		if (typeof window !== "undefined") {
			url = window.location.href;
			originUrl = window.location.origin;
		}
	}, []);

	return (
		<DropdownMenu>
			<Tooltip>
				<TooltipTrigger asChild>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<Share2 />
						</Button>
					</DropdownMenuTrigger>
				</TooltipTrigger>
				<TooltipContent>
					<p>Share</p>
				</TooltipContent>
			</Tooltip>
			<DropdownMenuContent align="end" className="w-[180px]">
				<DropdownMenuItem>
					<TwitterShareButton
						url={url}
						title={title}
						hashtags={hashtags}
						related={["zappotech"]}
						className="flex items-center gap-2"
					>
						<XIcon size={20} round /> Share to Twitter
					</TwitterShareButton>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<LinkedinShareButton
						title={title}
						source={originUrl}
						url={url}
						className="flex items-center gap-2"
					>
						<LinkedinIcon size={20} round />
						Share to Linkedin
					</LinkedinShareButton>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<RedditShareButton
						url={url}
						title={title}
						className="flex items-center gap-2"
					>
						<RedditIcon size={20} round /> Share to Reddit
					</RedditShareButton>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<FacebookShareButton
						hashtag={hashtags}
						url={url}
						className="flex items-center gap-2"
					>
						<FacebookIcon size={20} round /> Share to Facebook
					</FacebookShareButton>
				</DropdownMenuItem>
				<DropdownMenuItem className="flex items-center gap-2">
					<Share2 size={20} />
					Share Post via...
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
