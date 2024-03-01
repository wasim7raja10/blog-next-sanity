"use client";

import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { login, signup } from "@/lib/auth/actions";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

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

			<form action={isLogin ? login : signup} className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						required
						id="email"
						type="email"
						name="email"
						placeholder="m@example.com"
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input required id="password" type="password" name="password" />
				</div>
				{!isLogin && (
					<div className="grid gap-2">
						<Label htmlFor="confirmPassword">Confirm Password</Label>
						<Input
							required
							id="confirmPassword"
							type="password"
							name="confirm-password"
						/>
					</div>
				)}
				<FormButton isLogin={isLogin} />
			</form>
		</>
	);
}

function FormButton({ isLogin }) {
	const { pending } = useFormStatus();
	return (
		<Button disabled={pending} className="w-full">
			{pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			{isLogin ? "Log in" : "Create account"}
		</Button>
	);
}
