import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../../utils/backendApi";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: api }), // Change to your API
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product", // 👈 API endpoint
    }),
    getProductById: builder.query({
      query: (productId) => `/product/${productId}`, // Fetch single product details
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
