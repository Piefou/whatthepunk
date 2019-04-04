/**
 * Helper class to build a complete URL from a list of GET parameters
 */
export default class Query {
	constructor(url) {
		this.baseUrl = url;
		this.params = [];
	}

	p(paramName, paramValue) {
		if (paramValue) {
			this.params.push({ name: paramName, value: paramValue });
		}
		return this;
	}

	toString() {
		const queryReducer = (query, param, i) => {
			const delimiter = i === 0 ? '?' : '&';
			return query + delimiter + param.name + '=' + param.value;
		};

		return this.params.reduce(queryReducer, this.baseUrl);
	}
}
