"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import AuthModal from "./auth-modal";

export default function LoginButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="bg-Dialog hover:bg-background px-3 sm:px-8 h-8 sm:h-10"
					variant="outline"
				>
					Login
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-lg max-w-[90%] rounded-lg">
				<AuthModal />
			</DialogContent>
		</Dialog>
	);
}
