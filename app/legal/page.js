import { footerCompanyData } from "@/lib/footer.data";
import Link from "next/link";

export default function Page() {
	return (
		<div className="py-16 max-w-screen-md mx-auto">
			<h2 className="text-center text-3xl">Legal Pages</h2>
			<ul className="font-medium text-card-foreground-secondary space-y-2">
				{footerCompanyData.map((it) => (
					<li key={it.slug}>
						<Link className="hover:text-foreground max-w-max" href={it.slug}>
							{it.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
