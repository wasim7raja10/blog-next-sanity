import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request) {
	const requestUrl = new URL(request.url);
	const formData = await request.formData();
	const supabase = createClient();

	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const { error } = await supabase.auth.signUp(data);

	if (error) {
		return NextResponse.redirect("/error");
	}

	return NextResponse.redirect(requestUrl.origin, {
		status: 301,
	});
}
