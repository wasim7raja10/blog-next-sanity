import Container from "./container";
import Link from "next/link";
import Brand from "./brand";
import Search from "./search";
import Icon from "./icon";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
	return (
		<div className="bg-card py-4">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div className="hidden sm:block">
						<Search />
					</div>
					<div className="sm:hidden">
						<Sheet>
							<SheetTrigger>
								<Icon size={20} name={"search"} />
							</SheetTrigger>
							<SheetContent className="w-full">
								<SheetClose className="pb-4">
									<Icon name={"arrow-left"} />
								</SheetClose>
								<Search />
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</Container>
		</div>
	);
}
