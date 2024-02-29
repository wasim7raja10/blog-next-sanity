import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {
	const requestUrl = new URL(request.url);
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	const supabase = createClient();

	await supabase.auth.signInWithPassword({
		email,
		password,
	});

	return NextResponse.redirect(requestUrl.origin, {
		status: 301,
	});
}
