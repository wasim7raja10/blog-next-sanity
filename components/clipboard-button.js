"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export default function ClipboardButton() {
	const [copied, setCopied] = useState(false);
	const { toast } = useToast();

	function copy() {
		navigator.clipboard.writeText(window.location.href);
		setCopied(true);
		toast({
			title: "Link copied.",
		});

		// Reset copied state to false after 3 seconds
		setTimeout(() => {
			setCopied(false);
		}, 5000);
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="ghost" size="icon" onClick={copy}>
					{copied ? <ClipboardCheck /> : <Clipboard />}
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>Copy link</p>
			</TooltipContent>
		</Tooltip>
	);
}
