"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Login() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-Dialog hover:bg-background" variant="ghost">
					Log in
				</Button>
			</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle className="text-2xl">Create an account</DialogTitle>
					<DialogDescription>
						Enter your email below to create your account
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4">
					<div className="grid grid-cols-2 gap-6">
						<Button variant="outline">
							{/* <Github className="mr-2 h-4 w-4" /> */}
							Github
						</Button>
						<Button variant="outline">
							{/* <Icons.google className="mr-2 h-4 w-4" /> */}
							Google
						</Button>
					</div>
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="m@example.com" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" />
					</div>
				</div>
				<DialogFooter>
					<Button className="w-full">Create account</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
