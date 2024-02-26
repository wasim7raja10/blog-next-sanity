"use client";

import Search from "./search";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { ArrowLeftIcon, SearchIcon } from "lucide-react";

export default function SearchSheet() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className="bg-card hover:bg-background rounded-full"
					variant="ghost"
					size="icon"
				>
					<SearchIcon size={20} />
				</Button>
			</SheetTrigger>
			<SheetContent className="w-full sm:max-w-lg pt-0">
				<SheetClose className="py-4">
					<ArrowLeftIcon />
				</SheetClose>
				<Search />
			</SheetContent>
		</Sheet>
	);
}
