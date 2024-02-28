"use client";

import {
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export default function AuthModal() {
	const [isLogin, setIsLogin] = useState(true);
	return (
		<>
			<DialogHeader>
				<DialogTitle className="text-2xl">
					{isLogin ? "Log in with email" : "Create an account"}
				</DialogTitle>
				<DialogDescription>
					{isLogin ? "No account?" : "Already have an account?"}
					<Button
						variant="ghost"
						className="p-2 hover:bg-white hover:text-accent-foreground"
						onClick={() => setIsLogin((curr) => !curr)}
					>
						<span className="underline">
							{isLogin ? "Create one" : "Login"}
						</span>
					</Button>
				</DialogDescription>
			</DialogHeader>

			<div className="grid gap-4">
				{/* <div className="grid grid-cols-2 gap-6">
						<Button variant="outline">
							<Github className="mr-2 h-4 w-4" />
							Github
						</Button>
						<Button variant="outline">
							<Icons.google className="mr-2 h-4 w-4" />
							Google
						</Button>
					</div> */}
				{/* <div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Or continue with
							</span>
						</div>
					</div> */}
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input required id="email" type="email" placeholder="m@example.com" />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input required id="password" type="password" />
				</div>
				{!isLogin && (
					<div className="grid gap-2">
						<Label htmlFor="confirmPassword">Confirm Password</Label>
						<Input required id="confirmPassword" type="password" />
					</div>
				)}
			</div>
			<DialogFooter>
				<Button className="w-full">
					{isLogin ? "Log in" : "Create account"}
				</Button>
			</DialogFooter>
		</>
	);
}
