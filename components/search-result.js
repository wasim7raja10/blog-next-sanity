import HeroPost from "./hero-post";
import { SheetClose } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import SearchResultLoading from "./search-result-loading";

export default function SearchResult({ result, loading }) {
	if (loading) {
		return <SearchResultLoading />;
	} else if (result.length === 0) {
		return (
			<div className="py-10">
				<p className="font-medium text-center">No data found</p>
			</div>
		);
	}
	return (
		<ScrollArea className="h-[88%] w-full rounded-md my-4">
			<div className="flex flex-col gap-4">
				{result.map((it) => (
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
	);
}
