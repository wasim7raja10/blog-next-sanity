import Container from "./container";
import Link from "next/link";
import Brand from "./brand";
import Search from "./search";

export default function Header() {
	return (
		<div className="bg-card py-6">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div>
						<Search />
					</div>
				</div>
			</Container>
		</div>
	);
}
