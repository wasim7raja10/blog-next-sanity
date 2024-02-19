import useHeadings from "@/hooks/use-headings";
import { DialogClose } from "./ui/dialog";

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
						className="hover:font-bold text-md hover:bg-accent "
					>
						<DialogClose asChild>
							<a
								href={`#${heading.id}`}
								className="w-full h-full inline-block p-2"
							>
								{heading.text}
							</a>
						</DialogClose>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default ContentOutline;
