import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
	revalidateTag("post");
	return NextResponse.json({
		body: "success",
	});
}
