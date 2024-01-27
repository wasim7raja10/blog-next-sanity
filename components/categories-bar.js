export default function CategoriesBar({ allCategories }) {
	return (
		<ul>
			{allCategories.map((it) => (
				<li key={it._id}>{it.name}</li>
			))}
		</ul>
	);
}
