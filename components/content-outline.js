import useHeadings from "@/hooks/use-headings";

function ContentOutline() {
	const headings = useHeadings();
	const maxLevel = Math.max(...headings.map((heading) => heading.level));

	return (
		<nav>
			<ul>
				{headings.map((heading) => (
					<li
						key={heading.id}
						style={{ marginLeft: `${(maxLevel - heading.level) * 1}em` }}
						className="hover:font-bold text-md hover:bg-accent p-2"
					>
						<a href={`#${heading.id}`}>{heading.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default ContentOutline;
