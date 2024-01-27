import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function CategoriesBar({ allCategories }) {
	return (
		<div className="py-10">
			<ToggleGroup type="single">
				{allCategories.map((it) => (
					<ToggleGroupItem value={it.slug}>{it.name}</ToggleGroupItem>
				))}
			</ToggleGroup>
		</div>
	);
}
