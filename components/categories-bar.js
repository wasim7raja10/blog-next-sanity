import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function CategoriesBar({ allCategories }) {
	return (
		<div className="py-4 sm:py-10 sticky top-0 bg-background z-50">
			<div className="max-w-max mx-auto">
				<ToggleGroup
					defaultValue="explore"
					className="justify-start gap-6 overflow-auto no-scrollbar"
					type="single"
				>
					<ToggleGroupItem value="explore">Explore</ToggleGroupItem>
					{allCategories.map((it) => (
						<ToggleGroupItem value={it.slug}>{it.name}</ToggleGroupItem>
					))}
				</ToggleGroup>
			</div>
		</div>
	);
}
