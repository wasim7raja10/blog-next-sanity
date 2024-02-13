import { useEffect, useState } from "react";

export default function useHeadings() {
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
