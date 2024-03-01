import { createClient } from "@/lib/supabase/server";

export default async function BookmarkPage() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	let data = [];

	if (user) {
		data = (await supabase.from("bookmarks").select()).data;
		console.log("data", data);
	}

	if (data.length === 0)
		return <div>You have not bookmarked any articles yet</div>;

	return <div>{JSON.stringify(data)}</div>;
}
