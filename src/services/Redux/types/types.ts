export interface CartItem extends Product {
	quantity: number;
}
export type CartState = CartItem[];
