import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './ApiSlice/ApiSlice';
import cartSlice from './cartSlice/cartSlice';
import authSlice from './userSlice/userSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		user: authSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
