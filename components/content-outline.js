import useHeadings from "@/hooks/use-headings";

function ContentOutline() {
	const headings = useHeadings();
		return (
		<nav>
			<ul>
				{headings.map((heading) => (
					<li key={heading.id} style={{ marginLeft: `${heading.level}em` }}>
						<a href={`#${heading.id}`}>{heading.text}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default ContentOutline;
