import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "../../utils/backendApi";

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: fetchBaseQuery({ baseUrl: api }), // Change to your API
  endpoints: (builder) => ({
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
  }),
});

export const { useGetFilteredProductsQuery } = filterApi;
