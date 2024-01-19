import { config } from './config';

type TConfigApi = {
	baseUrl: string;
	headers: HeadersInit;
};

export class Api {
	private baseUrl;
	private headers;

	constructor({ baseUrl, headers }: TConfigApi) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}

	private onResponse(res: Response) {
		return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
	}

	private getApiUrl(path: string) {
		return `${this.baseUrl}${path}`;
	}

	getProductId(productId: string) {
		return fetch(this.getApiUrl(`/products/${productId}`), {
			headers: this.headers,
		}).then(this.onResponse);
	}

	getAllProducts(payload: { query: string; page: number; limit: number }) {
		return fetch(
			this.getApiUrl(
				`/products?query=${payload.query}&page=${payload.page}&limit=${payload.limit}`
			),
			{
				headers: this.headers,
			}
		).then(this.onResponse);
	}
	changeLikePostStatus(postID: string, like: boolean) {
		return fetch(this.getApiUrl(`products/likes/${postID}`), {
			method: like ? 'DELETE' : 'PUT',
			headers: this.headers,
		}).then(this.onResponse);
	}

	getUserInfo() {
		return fetch(this.getApiUrl('/users/me'), {
			headers: this.headers,
		}).then(this.onResponse);
	}

	setUserInfo(userData: Pick<User, 'name' | 'about'>) {
		return fetch(this.getApiUrl('/users/me'), {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify(userData),
		}).then(this.onResponse);
	}

	search(searchQuery: string) {
		return fetch(this.getApiUrl(`products/search?query=${searchQuery}`), {
			headers: this.headers,
		}).then(this.onResponse);
	}
	getUsers() {
		return fetch(this.getApiUrl('/users'), {
			headers: this.headers,
		}).then(this.onResponse);
	}
	// getAllInfo() {
	// 	return Promise.all([this.getUsers(), this.getAllProducts()]);
	// }
}

const api = new Api({
	baseUrl: config.apiUrl,
	headers: {
		'content-type': 'application/json',
		authorization: `Bearer ${config.apiToken}`,
	},
});

export default api;
