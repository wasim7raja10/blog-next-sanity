import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { categoriesQuery } from "@/lib/queries";
import { sanityClient } from "@/lib/sanity.server";

export default async function CategoriesBar({ currentCategory }) {
	const data = await sanityClient.fetch(categoriesQuery);
	return (
		<div className="py-4 mb-6 sm:py-6 sticky top-0 bg-background z-50 -mx-4 sm:mx-0 px-4 sm:px-0">
			<div className="max-w-max mx-auto">
				<ToggleGroup
					value={currentCategory}
					className="justify-start gap-3 sm:gap-4 overflow-auto no-scrollbar"
					type="single"
					size="sm"
				>
					<Link href="/">
						<ToggleGroupItem value="explore">Explore</ToggleGroupItem>
					</Link>
					{data?.map((it) => (
						<Link key={it.slug} href={it.slug}>
							<ToggleGroupItem value={it.slug}>{it.name}</ToggleGroupItem>
						</Link>
					))}
				</ToggleGroup>
			</div>
		</div>
	);
}
