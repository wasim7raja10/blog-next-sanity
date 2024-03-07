"use client";

import { Clipboard } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function ClipboardButton() {
	return (
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
	);
}
