import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../types/types';

const initialState: CartState = JSON.parse(
	localStorage.getItem('cart') || '[]'
);

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const existingItem = state.find(
				(item: Product) => item._id === action.payload._id
			);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.push({ ...action.payload, quantity: 1 });
			}
			localStorage.setItem('cart', JSON.stringify(state));
		},
		decreaseCart: (state, action: PayloadAction<Product>) => {
			const existingItem = state.find(
				(item: Product) => item._id === action.payload._id
			);
			if (existingItem) {
				existingItem.quantity -= 1;
			}
			localStorage.setItem('cart', JSON.stringify(state));
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			const index = state.findIndex(
				(item: Product) => item._id === action.payload
			);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
	},
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
