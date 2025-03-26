import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../utils/backendApi";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: api }), // Change to your API
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product", // 👈 API endpoint
    }),
    getFilteredProducts: builder.query({
      query: ({ category, brand, color, minPrice, maxPrice }) => {
        let query = "products?";
        if (category) query += `category=${category}&`;
        if (brand) query += `brand=${brand}&`;
        if (color) query += `color=${color}&`;
        if (minPrice !== undefined && maxPrice !== undefined) {
          query += `price_gte=${minPrice}&price_lte=${maxPrice}`;
        }
        return query;
      },
    }),
    getProductById: builder.query({
      query: (productId) => `/product/${productId}`, // Fetch single product details
    }),
  }),
});

export const { useGetProductsQuery, useGetFilteredProductsQuery, useGetProductByIdQuery } = productApi;
