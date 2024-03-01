"use client";

import { logout } from "@/lib/auth/actions";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function LogoutButton() {
	return (
		<form action={logout}>
			<FormButton />
		</form>
	);
}

function FormButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			className="bg-Dialog hover:bg-background px-3 sm:px-8 h-8 sm:h-10"
			variant="outline"
		>
			{pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			Sign out
		</Button>
	);
}
