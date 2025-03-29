import React, { useRef, useState } from "react";
import { useGetProductsQuery } from "../../features/CreateApi/productApiSlice";
import { useNavigate } from "react-router-dom";
import { useGetFilteredProductsQuery } from "../../features/CreateApi/filterApiSlice";

const ProductPage = () => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    color: "",
    minPrice: undefined,
    maxPrice: undefined,
  });
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") ? Number(localStorage.getItem("currentPage")) : 1);
  const  [totalPages, setTotalPages ] = useState(1000)
  // Fetch default products
  const { data: products, error, isLoading } = useGetProductsQuery(currentPage);
  
  // Fetch filtered products if filters are applied
  const { data: filteredProducts } = useGetFilteredProductsQuery(filters, {
    skip:
    !filters.category &&
    !filters.brand &&
      !filters.color &&
      filters.minPrice === undefined &&
      filters.maxPrice === undefined,
    });
    
    // Final product list (filtered if filters applied, else default)
  const displayedProducts = filteredProducts || products;
  
  // Handle filter changes
  const applyFilter = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      localStorage.setItem("currentPage", newPage);
    }
  };
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  if (isLoading) {
    return (
      <div className="text-2xl flex min-h-96 justify-center items-center font-bold">
        <p className="text-center font-bold">Loading Products...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-2xl min-h-96 flex justify-center items-center font-bold">
        <p className="text-center">Error fetching Products</p>
      </div>
    );
  }
  console.log("displayProducts line 53 ProductPage", displayedProducts);
  return (
    <div className="flex flex-wrap max-w-full min-h-screen mx-auto border-y-2 border-y-gray-200 my-5">
      {/* Sidebar */}
      <div className="w-full sm:w-[25%] md:w-[20%] lg:w-[15%] p-4 border-r-2 border-gray-200">
        <h2 className="text-lg font-semibold">Filters</h2>

        {/* Category Filter */}
        <h3 className="mt-4 font-medium">Category</h3>
        <select
          onChange={(e) => applyFilter("category", e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">All</option>
          <option value="tshirt">T-Shirts</option>
          <option value="jeans">Jeans</option>
        </select>

        {/* Brand Filter */}
        <h3 className="mt-4 font-medium">Brand</h3>
        <select
          onChange={(e) => applyFilter("brand", e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">All</option>
          <option value="roadster">Roadster</option>
          <option value="hrx">HRX</option>
        </select>

        {/* Color Filter */}
        <h3 className="mt-4 font-medium">Color</h3>

        <div className="flex items-center gap-2 ">
          <input
            onClick={() => applyFilter("color", "black")}
            type="checkbox"
            name="Black"
            id="black"
          />
          <p className="h-3 w-3 rounded-full bg-black"></p>
          <p>Black</p>
        </div>
        <div className="flex items-center gap-2 ">
          <input
            onClick={() => applyFilter("color", "blue")}
            type="checkbox"
            name="blue"
            id="blue"
          />
          <p className="h-3 w-3 rounded-full bg-blue-600"></p>
          <p>Blue</p>
        </div>
        <div className="flex items-center gap-2 ">
          <input
            onClick={() => applyFilter("color", "white")}
            type="checkbox"
            name="white"
            id="white"
          />
          <p className="h-3 w-3 rounded-full bg-white border-2 text-gray-300"></p>
          <p>White</p>
        </div>
        <div className="flex items-center gap-2 ">
          <input
            onClick={() => applyFilter("color", "red")}
            type="checkbox"
            name="red"
            id="red"
          />
          <p className="h-3 w-3 rounded-full bg-red-600"></p>
          <p>Red</p>
        </div>

        {/* Price Filter */}
        <h3 className="mt-4 font-medium">Price</h3>
        <input
          type="range"
          min="100"
          max="10000"
          value={filters.maxPrice}
          onChange={(e) => applyFilter("maxPrice", e.target.value)}
          className="w-full"
        />
        <p>Max Price: Rs. {filters.maxPrice}</p>
      </div>

      {/* Product Grid */}
      <div className="w-full sm:w-[75%] md:w-[80%] lg:w-[85%] p-4">
      <div className="flex justify-center items-center p-3">
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-3 text-gray-600">
            Page {currentPage} of { totalPages }
          </span>
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {displayedProducts?.map((item) => (
            <div key={item.product_id} className=" p-4 cursor-pointer">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full"
                onClick={() => handleProductClick(item.product_id)}
              />
              <div className="p-4 flex flex-col gap-1 text-gray-700">
                <strong>{item.title}</strong>
                <p>{item.product_description.slice(0, 25)}...</p>
                <div className="flex justify-items-start gap-1 items-center">
                  <p>
                    <strong>Rs. {item.final_price}</strong>
                  </p>
                  <div className="flex gap-0.5 text-xs">
                    <p className="line-through pr-1">{item.initial_price}</p>
                    <span className="text-orange-400">
                      ({item.discount}% OFF)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center p-3">
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-3 text-gray-600">
            Page {currentPage} of { totalPages }
          </span>
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <button
            className="px-3 py-1 border border-gray-300 rounded mx-1 text-gray-700 hover:bg-gray-200"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
