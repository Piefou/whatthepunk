import Query from './query.js';

const rootUrl = 'https://api.punkapi.com/v2/beers';

/**
 * Entry-point for global searching on the PunkAPI
 * Returns a JSON list of beers
 * @param {PunkAPI search parameters} object
 */
export async function getBeers({ page, per_page, abv, ibu, ebc, name }) {
	const query = new Query(rootUrl)
		.p('page', page)
		.p('per_page', per_page)
		.p('abv_gt', abv)
		.p('ibu_gt', ibu)
		.p('ebc_gt', ebc)
		.p('beer_name', name);

	const apiQuery = query.toString();

	const responses = await fetch(apiQuery);
	const json = await responses.json();
	return json;
}
