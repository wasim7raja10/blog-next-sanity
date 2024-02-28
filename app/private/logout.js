"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
	const supabase = createClient();
	const router = useRouter();
	return (
		<button
			className="block bg-black text-white p-4"
			onClick={async () => {
				const { error } = await supabase.auth.signOut();
				if (!error) {
					router.push("/");
				}
			}}
		>
			logout
		</button>
	);
}
