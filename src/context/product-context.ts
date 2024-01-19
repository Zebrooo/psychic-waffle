import { createContext } from 'react';

export interface ProductsContextInterface {
	products?: Product[];
	setPage?: (value: ((prevState: number) => number) | number) => void | null;
	page?: number;
	totalPage?: number;
	handleProductLike?: (arr: ProductLikeParam) => void;
}

export const ProductsContext = createContext<ProductsContextInterface | null>(
	null
);

ProductsContext.displayName = 'ProductsContext';
