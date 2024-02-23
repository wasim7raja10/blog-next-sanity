"use client";

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
import { Button } from "./ui/button";

export default function Header() {
	return (
		<div className="bg-card py-4">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div>
						<Sheet>
							<SheetTrigger asChild>
								<Button
									className="bg-card hover:bg-background rounded-full"
									variant="ghost"
									size="icon"
								>
									<Icon name={"search"} size={20} />
								</Button>
							</SheetTrigger>
							<SheetContent className="w-full sm:max-w-lg">
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
