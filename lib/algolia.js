import algoliasearch from "algoliasearch";

export const algoliaServerClient = algoliasearch(
	process.env.ALGOLIA_APPLICATION_ID,
	process.env.ALGOLIA_ADMIN_API_KEY
);
