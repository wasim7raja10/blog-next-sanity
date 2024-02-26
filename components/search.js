"use client";

import { Mic, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { algoliaIndex } from "@/lib/algolia";
import HeroPost from "./hero-post";
import { SheetClose } from "./ui/sheet";

export default function Search() {
	const [result, setResult] = useState([]);

	const handleSearch = useDebouncedCallback(async (term) => {
		if (term.trim().length === 0) {
			setResult([]);
			return;
		}
		try {
			const { hits } = await algoliaIndex.search(term);
			setResult(hits);
		} catch (err) {
			console.error("Error search algolia", err);
		}
	}, 300);

	return (
		<>
			<div className="relative">
				<SearchIcon
					size={20}
					className="absolute left-2 top-0 transform translate-y-1/2"
				/>
				<Input
					type="search"
					placeholder="Search your topic"
					className="rounded-lg px-10 py-3 min-w-full sm:min-w-80 border-foreground border-[1.5px] border-solid"
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<Mic
					size={20}
					className="absolute right-2 top-0 transform translate-y-1/2 cursor-pointer"
				/>
			</div>
			<ScrollArea className="h-[88%] w-full rounded-md my-4">
				<div className="flex flex-col gap-4">
					{result.length > 0 &&
						result.map((it) => (
							<SheetClose asChild key={it.slug}>
								<HeroPost
									title={it.title}
									coverImage={it.coverImage}
									date={it.date}
									author={it.author}
									slug={it.slug}
									excerpt={it.excerpt}
									category={it.categories[0]}
									isSmall
								/>
							</SheetClose>
						))}
				</div>
			</ScrollArea>
		</>
	);
}
