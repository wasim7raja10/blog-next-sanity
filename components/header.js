"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Container from "./container";
import Link from "next/link";
import Brand from "./brand";
import SearchSheet from "./search-sheet";
import { Button } from "./ui/button";
import AuthModal from "./auth-modal";

export default function Header() {
	return (
		<div className="bg-card py-4">
			<Container>
				<div className="flex justify-between items-center">
					<Link href={"/"}>
						<Brand />
					</Link>
					<div className="flex items-center gap-4">
						<SearchSheet />
						<Link href={"/private"}>Private</Link>
						<Dialog>
							<DialogTrigger asChild>
								<Button
									className="bg-Dialog hover:bg-background"
									variant="outline"
								>
									Login
								</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-lg max-w-[90%] rounded-lg">
								<AuthModal />
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</Container>
		</div>
	);
}
