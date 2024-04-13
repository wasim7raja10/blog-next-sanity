import LoadingIcon from "@/components/loading-icon";

export default function Loading() {
	return (
		<div className="bg-background fixed top-0 bottom-0 left-0 right-0 w-full h-screen grid place-content-center">
			<LoadingIcon />
		</div>
	);
}
