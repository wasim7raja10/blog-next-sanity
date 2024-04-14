import { Skeleton } from "./ui/skeleton";

export default function SearchResultLoading() {
	return (
		<div className="space-y-4 my-4">
			{new Array(3).fill(0).map((_, index) => (
				<div key={index} className=" rounded-md overflow-hidden flex max-w-full space-y-0">
					<div className="sm:min-h-[150px] min-h-[94px] sm:min-w-[192px] min-w-[120px]">
						<Skeleton className="w-full h-full"></Skeleton>
						{/* <Badge className="absolute bottom-2 right-2">#{category.name}</Badge> */}
					</div>
					<div className="px-4 pb-4 space-y-4 w-full p-2 sm:p-4 flex flex-col justify-between sm:justify-start">
						<div className="space-y-1">
							<Skeleton className="w-full h-5"></Skeleton>
							<Skeleton className="w-full h-5"></Skeleton>
						</div>
						{/* <p className="mb-4 text-lg leading-relaxed">{excerpt}</p> */}
						<div className="flex justify-between items-center">
							<div className="flex items-center">
								<div className="relative w-5 h-5 mr-2">
									<Skeleton className="w-5 h-5 rounded-full"></Skeleton>
								</div>
								<Skeleton className="w-14 h-2"></Skeleton>
							</div>
							<Skeleton className="w-14 h-2"></Skeleton>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
