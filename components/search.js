"use client";

import { Mic, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { algoliaIndex } from "@/lib/algolia";
import SearchResult from "./search-result";

export default function Search() {
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleSearch = useDebouncedCallback(async (term) => {
		if (term.trim().length === 0) {
			setResult([]);
			return;
		}
		setLoading(true);
		try {
			const { hits } = await algoliaIndex.search(term);
			setResult(hits);
			setLoading(false);
		} catch (err) {
			setLoading(false);
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
			<SearchResult result={result} loading={loading} />
		</>
	);
}
