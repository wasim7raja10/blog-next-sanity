import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function CategoriesBar({ allCategories }) {
	return (
		<div className="max-w-max mx-auto py-4 sm:py-10">
			<ToggleGroup
				defaultValue="explore"
				className="justify-start gap-6 overflow-auto"
				type="single"
			>
				<ToggleGroupItem value="explore">Explore</ToggleGroupItem>
				{allCategories.map((it) => (
					<ToggleGroupItem value={it.slug}>{it.name}</ToggleGroupItem>
				))}
			</ToggleGroup>
		</div>
	);
}
