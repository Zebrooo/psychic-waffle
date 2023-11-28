export {};

declare global {
	type PostLikeParam = {
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
	interface CommentPost {
		_id: string;
		text: string;
		author?: User;
		post?: Post;
		created_at?: string;
		updated_at?: string;
	}
	interface Post {
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
		picture: string;
	}
}
