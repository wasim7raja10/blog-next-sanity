"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignoutButton() {
	const supabase = createClient();
	const router = useRouter();
	return (
		<Button
			onClick={async () => {
				const { error } = await supabase.auth.signOut();
				if (!error) {
					router.refresh();
				}
			}}
			className="bg-Dialog hover:bg-background"
			variant="outline"
		>
			Sign out
		</Button>
	);
}
