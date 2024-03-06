"use server";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { createClient } from "@/lib/supabase/server";

export default async function Provider({ children }) {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<>
			<div className="min-h-screen">
				<Header user={user} />
				<main>
					<Container>{children}</Container>
				</main>
			</div>
			<Footer />
			<Toaster />
		</>
	);
}
