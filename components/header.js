import Container from "./container";
import Link from "next/link";
import Brand from "./brand";

export default function Header() {
	return (
		<div className="bg-card py-6">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div>search</div>
				</div>
			</Container>
		</div>
	);
}
