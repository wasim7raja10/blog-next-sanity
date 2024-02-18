import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function CategoriesBar({ allCategories }) {
	return (
		<div className="py-4 mb-6 sm:py-6 sticky top-0 bg-background z-50 -mx-4 sm:mx-0 px-4 sm:px-0">
			<div className="max-w-max mx-auto">
				<ToggleGroup
					defaultValue="explore"
					className="justify-start gap-3 sm:gap-4 overflow-auto no-scrollbar"
					type="single"
					size="sm"
				>
					<ToggleGroupItem value="explore">Explore</ToggleGroupItem>
					{allCategories.map((it) => (
						<ToggleGroupItem key={it.slug} value={it.slug}>
							{it.name}
						</ToggleGroupItem>
					))}
				</ToggleGroup>
			</div>
		</div>
	);
}
