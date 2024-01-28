import Icon from "./icon";
import { Input } from "./ui/input";

export default function Search() {
	return (
		<div className="relative">
			<Icon
				name="search"
				size={20}
				className="absolute left-2 top-0 transform translate-y-1/2"
			/>
			<Input
				type="search"
				placeholder="Search your topic"
				className="rounded-lg px-10 py-3 min-w-full sm:min-w-80  border-foreground border-[1.5px] border-solid"
			/>
			<Icon
				name="mic"
				size={20}
				className="absolute right-2 top-0 transform translate-y-1/2 cursor-pointer"
			/>
		</div>
	);
}
