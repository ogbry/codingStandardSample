import axios from 'axios';
let instance = axios.create();

const BASE_URL = process.env.APP_API_BASE_URL || `https://jsonplaceholder.typicode.com`;

instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/json';
const CancelToken = axios.CancelToken;

let getData = (endpoint, query) => {
	let test = '',
		count = 0,
		cancel;

	let checkedEndpoint = endpointChecker(endpoint);
	if (query) {
		for (const key of Object.keys(query)) {
			if (count === 0) {
				test += `?${key}=${query[key]}`;
			}
			else {
				test += `&${key}=${query[key]}`;
			}
			count++;
		}
	}
	return instance.get(`${BASE_URL}${checkedEndpoint}${test}`, {
		cancelToken: new CancelToken(function executor(cancelHandler) {
			cancel = cancelHandler;
		})
	});
};

let postData = (endpoint, data) => {
	let checkedEndpoint = endpointChecker(endpoint),
		cancel;

	return instance.post(`${BASE_URL}${checkedEndpoint}`, data, {
		cancelToken: new CancelToken(function executor(cancelHandler) {
			cancel = cancelHandler;
		})
	});
};

let endpointChecker = (endpoint) => {
	const regex = new RegExp(/\?/, 'g');
	if (endpoint.match(regex)) {
		return endpoint;
	}
	if (endpoint[0] !== '/') {
		endpoint = `/${endpoint}`;
	}
	if (endpoint[endpoint.length - 1] !== '/') {
		endpoint = `${endpoint}/`;
	}
	return endpoint;
};

export { getData, postData };
