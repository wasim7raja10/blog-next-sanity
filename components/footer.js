import Container from "./container";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-accent-1 border-t border-accent-2">
			<Container>
				<div className="flex flex-wrap items-center md:justify-between justify-center">
					<div className="w-full md:w-4/12 px-4 mx-auto text-center">
						<div className="text-sm text-blueGray-500 font-semibold py-1">
							Copyright © <span id="get-current-year">{year}</span>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
