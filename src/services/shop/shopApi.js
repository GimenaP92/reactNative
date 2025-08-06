import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseRTDBURL = process.env.EXPO_PUBLIC_BASE_RTDB_URL;

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseRTDBURL }),
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => "products.json",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products/${category}.json`,
      transformResponse: (response) => Object.values(response),
    }),

    getProductById: builder.query({
      query: ({ subcategory, id }) => `products/${subcategory}/${id}.json`,
    }),

    getCategories: builder.query({ query: () => "categories.json" }),

    getOrders: builder.query({ query: () => "orders.json" }),
  getOrdersByUserId: builder.query({
  query: (userId) =>
    `orders.json?orderBy="userId"&equalTo="${userId}"`,
  transformResponse: (response) => {
    if (!response) return [];
    return Object.entries(response).map(([id, value]) => ({
      id,
      ...value,
    }));
  },
}),


    createOrder: builder.mutation({
      query: (order) => ({
        url: `orders.json`,   
        method: "POST",
        body: order,
      }),
    }),

  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetOrdersQuery,
  useGetOrdersByUserIdQuery,
  useCreateOrderMutation, 
} = shopApi;
