import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req) {
	const supabase = createClient();

	// Check if we have a session
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		await supabase.auth.signOut();
	}

	return NextResponse.redirect(new URL("/", req.url), {
		status: 302,
	});
}
