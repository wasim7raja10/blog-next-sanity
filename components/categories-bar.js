import Link from "next/link";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { categoriesQuery } from "@/lib/queries";
import useSWR from "swr";
import { getClient, overlayDrafts } from "@/lib/sanity.server";

export default function CategoriesBar() {
	const pathName = usePathname().slice(1);
	const [currentCat, setCurrentCat] = useState(pathName || "explore");
	const { data, isLoading, error } = useSWR(categoriesQuery, async (query) =>
		overlayDrafts(await getClient().fetch(query))
	);

	if (isLoading) return "loading ...";

	return (
		<div className="py-4 mb-6 sm:py-6 sticky top-0 bg-background z-50 -mx-4 sm:mx-0 px-4 sm:px-0">
			<div className="max-w-max mx-auto">
				<ToggleGroup
					value={currentCat}
					className="justify-start gap-3 sm:gap-4 overflow-auto no-scrollbar"
					type="single"
					size="sm"
					onValueChange={(value) => {
						if (value) console.log(value);
					}}
				>
					<ToggleGroupItem value="explore">
						<Link href="/">Explore</Link>
					</ToggleGroupItem>
					{data?.map((it) => (
						<ToggleGroupItem key={it.slug} value={it.slug}>
							<Link href={it.slug}>{it.name}</Link>
						</ToggleGroupItem>
					))}
				</ToggleGroup>
			</div>
		</div>
	);
}
