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
	WhatsappIcon,
	WhatsappShareButton,
	XIcon,
} from "react-share";
import { usePathname } from "next/navigation";

export default function ShareButton({ title, hashtags }) {
	let originUrl;

	if (typeof window !== "undefined") {
		originUrl = window?.location.origin;
	}

	const pathname = usePathname();
	const url = originUrl + pathname;

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
				<DropdownMenuItem>
					<WhatsappShareButton
						url={url}
						title={title}
						className="flex items-center gap-2"
					>
						<WhatsappIcon size={20} round /> Share to Whatsapp
					</WhatsappShareButton>
				</DropdownMenuItem>
				{/* <DropdownMenuItem className="flex items-center gap-2">
					<Share2 size={20} />
					Share Post via...
				</DropdownMenuItem> */}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
