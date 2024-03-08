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

export default function ShareButton() {
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
			<DropdownMenuContent align="end" className="w-[160px]">
				<DropdownMenuItem>Share to Twitter</DropdownMenuItem>
				<DropdownMenuItem>Share to Linkedin</DropdownMenuItem>
				<DropdownMenuItem>Share to Reddit</DropdownMenuItem>
				<DropdownMenuItem>Share to Facebook</DropdownMenuItem>
				<DropdownMenuItem>Share to Mastodon</DropdownMenuItem>
				<DropdownMenuItem>Share Post via...</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
