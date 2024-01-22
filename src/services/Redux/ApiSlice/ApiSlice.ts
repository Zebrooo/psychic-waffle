import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../config';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: config.apiUrl,
		prepareHeaders: (headers) => {
			headers.set('Authorization', `Bearer ${config.apiToken}`);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getProductData: builder.query({
			query: (payload: { query: string; page: number; limit: number }) =>
				`/products?query=${payload.query}&page=${payload.page}&limit=${payload.limit}`,
		}),
		userAuthorization: builder.mutation({
			query: (userData) => ({
				url: '/signin',
				method: 'POST',
				body: userData,
			}),
		}),
		registerUser: builder.mutation({
			query: (userData) => ({
				url: '/signup',
				method: 'POST',
				body: userData,
			}),
		}),
	}),
});

export const {
	useGetProductDataQuery,
	useUserAuthorizationMutation,
	useRegisterUserMutation,
} = apiSlice;
