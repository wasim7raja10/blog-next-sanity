import Link from "next/link";
import { useEffect, useState } from "react";

function useHeadings() {
	const [headings, setHeadings] = useState([]);
	useEffect(() => {
		const elements = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
			.filter((element) => element.id)
			.map((element) => ({
				id: element.id,
				text: element.textContent ?? "",
				level: Number(element.tagName.substring(1)),
			}));
		setHeadings(elements);
	}, []);
	return headings;
}

function ContentOutline() {
	const headings = useHeadings();
	return (
		<nav>
			<ul>
				{headings.map((heading) => (
					<li key={heading.id} style={{ marginLeft: `${heading.level - 2}em` }}>
						<Link href={`#${heading.id}`}>{heading.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default ContentOutline;
