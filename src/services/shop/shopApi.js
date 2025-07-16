import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseRTDBURL = process.env.EXPO_PUBLIC_BASE_RTDB_URL;

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseRTDBURL }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "products.json" }),
    getProductById: builder.query({ query: (id) => `products/${id}.json` }),
    getCategories: builder.query({ query: () => "categories.json" }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => Object.values(response),
    }),
    getCart: builder.query({ query: () => "cart.json" }),
    getOrders: builder.query({ query: () => "orders.json" }),
    getOrderById: builder.query({ query: (id) => `orders/${id}.json` }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCartQuery,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
} = shopApi;
