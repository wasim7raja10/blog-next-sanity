"use client";

import { Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function ShareButton() {
	return (
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
	);
}
