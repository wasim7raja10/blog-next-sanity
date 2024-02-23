import { Mic, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export default function Search() {
	const tags = Array.from({ length: 50 }).map(
		(_, i, a) => `v1.2.0-beta.${a.length - i}`
	);
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
				/>
				<Mic
					size={20}
					className="absolute right-2 top-0 transform translate-y-1/2 cursor-pointer"
				/>
			</div>
			<ScrollArea className="h-[88%] w-full rounded-md border my-4">
				<div className="p-4">
					<h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
					{tags.map((tag) => (
						<div key={tag} className="text-sm">
							{tag}
						</div>
					))}
				</div>
			</ScrollArea>
		</>
	);
}
