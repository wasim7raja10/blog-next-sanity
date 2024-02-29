import { Button } from "./ui/button";

export default function LogoutButton() {
	return (
		<form action={"/api/auth/logout"} method="post">
			<Button className="bg-Dialog hover:bg-background" variant="outline">
				Sign out
			</Button>
		</form>
	);
}
