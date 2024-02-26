import algoliasearch from "algoliasearch/lite";

export const algoliaServerClient = algoliasearch(
	process.env.ALGOLIA_APPLICATION_ID,
	process.env.ALGOLIA_ADMIN_API_KEY
);

export const algoliaSearchClient = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY
);

export const algoliaIndex = algoliaSearchClient.initIndex(
	process.env.NEXT_PUBLIC_ALGOLIA_INDEX
);
