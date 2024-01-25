import Container from "./container";
import Link from "next/link";
import Brand from "./brand";

export default function Header() {
	return (
		<div className="bg-card py-6">
			<Container>
				<div className="flex justify-between items-center">
					<h1>
						<Link href={"/"}>
							<Brand />
						</Link>
					</h1>
					<div>search</div>
				</div>
			</Container>
		</div>
	);
}
