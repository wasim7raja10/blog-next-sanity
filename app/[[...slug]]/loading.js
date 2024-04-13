import { Skeleton } from "@/components/ui/skeleton";

export default function Loading({ isSmall }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-max pb-24">
			{new Array(6).fill(0).map((it) => (
				<div className="w-[340px] rounded-md space-y-3">
					<div className="h-60 w-full">
						<Skeleton className="w-full h-full"></Skeleton>
						{/* <Badge className="absolute bottom-2 right-2">#{category.name}</Badge> */}
					</div>
					<div className="px-4 pb-4 space-y-4 w-full">
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
