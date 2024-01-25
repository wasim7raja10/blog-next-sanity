import Container from "./container";
import Link from "next/link";
import Brand from "./brand";

export default function Header() {
	return (
		<div>
			<Container>
				<h1>
					<Link href={"/"}>
						<Brand />
					</Link>
				</h1>
			</Container>
		</div>
	);
}
