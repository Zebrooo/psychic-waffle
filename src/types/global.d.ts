export {};

declare global {
	type ProductLikeParam = {
		_id: string;
		likes: string[];
	};
	interface User {
		name: string;
		about: string;
		avatar: string;
		_id: string;
		email: string;
		__v?: number;
		group?: string;
	}
	interface CommentProduct {
		_id: string;
		text: string;
		author?: User;
		product?: Product;
		created_at?: string;
		updated_at?: string;
	}
	interface Product {
		_id: string;
		name: string;
		price: number;
		discount: number;
		wight: string;
		description: string;
		isFavorite: boolean;
		isCart: boolean;
		available: boolean;
		stock: number;
		pictures: string;
		reviews: CommentProduct[];
	}
}
