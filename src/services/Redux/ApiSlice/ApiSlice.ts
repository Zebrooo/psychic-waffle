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
			query: ({ query, page }) => ({
				url: '/products?',
				params: {
					page,
					query,
					limit: 10,
				},
			}),
			serializeQueryArgs: ({ endpointName, queryArgs: { searchPhraze } }) => {
				return endpointName + searchPhraze;
			},
			merge: (currentCache, newResponse, { arg: { page } }) => {
				if (page === 1) return;
				currentCache.products.push(...newResponse.products);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg?.page !== previousArg?.page;
			},
			providesTags: (response) => {
				return response
					? [
							...response.products.map(({ id }: { id: string }) => ({
								type: 'Products' as const,
								id,
							})),
							{ type: 'Products', id: 'PRODUCTS_LIST' },
					  ]
					: [{ type: 'Posts', id: 'PRODUCTS_LIST' }];
			},
		}),
		userAuthorization: builder.mutation({
			query: (userData) => ({
				url: '/signin',
				method: 'POST',
				body: userData,
			}),
		}),
		getUserInfo: builder.query({
			query: () => '/users/me',
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
	useGetUserInfoQuery,
	useGetProductDataQuery,
	useUserAuthorizationMutation,
	useRegisterUserMutation,
} = apiSlice;
