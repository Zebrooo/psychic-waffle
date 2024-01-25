import { AddToCartAction, RemoveFromCartAction } from '../actions/actions';

export interface CartItem extends Product {
	quantity: number;
}
export type CartState = CartItem[];

export type CartActionTypes = AddToCartAction | RemoveFromCartAction;
