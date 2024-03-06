"use client";

import Container from "./container";
import BrandLink from "./brand-link";
import SearchSheet from "./search-sheet";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

export default function Header({ user }) {
	return (
		<div className="bg-card py-4">
			<Container>
				<div className="flex justify-between items-center">
					<div className="w-[120px] sm:w-[150px]">
						<BrandLink />
					</div>
					<div className="flex items-center gap-2 sm:gap-4">
						<SearchSheet />
						{user ? <LogoutButton /> : <LoginButton />}
					</div>
				</div>
			</Container>
		</div>
	);
}
