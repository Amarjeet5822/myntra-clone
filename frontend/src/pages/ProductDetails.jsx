import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5"; // For the wishlist icon
import { MdLocationOn } from "react-icons/md"; // For the delivery pincode icon
import { FaCheckCircle } from "react-icons/fa"; // For the checkmark icon
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/CreateApi/productApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, resetWishlistError, resetWishlistMessage } from "../features/wishlistSlice";
import { addToBag, resetBagStatusError, resetBagStatusMessage } from "../features/bagSlice";
import { ProductDetailSection } from "../pages/index";
import {  toast } from 'react-toastify';
const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [pincode, setPincode] = useState("272126");
  const dispatch = useDispatch();
  const { error: wishlistError, message: wishlistMessage } = useSelector(
    (state) => state.wishlist
  );
  const { error: bagError, message: bagMessage } = useSelector(
    (state) => state.bag
  );

  // Sample product data (you can fetch this from an API)
  const { productId } = useParams();
  const { data: item, error, isLoading } = useGetProductByIdQuery(productId);
  const Notify = (data) => toast(data);
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const wishListHandler = (data) => {
    // add Item to wishlist logic
    console.log("Dispatching data to bag:", data); // ✅ Debugging ke liye
    dispatch(
      addToWishlist({
        title: data.title,
        product_id: item.product_id,
        product_description: item.product_description,
        rating: item.rating,
        ratings_count: item.ratings_count,
        initial_price: item.initial_price,
        discount: item.discount,
        final_price: item.final_price,
        image: item.images[0],
      })
    );
  };

  const bagHandler = (data) => {
    // add Item to bag logic
    console.log("Dispatching item to bag:", data); // ✅ for Debugging
    const newData = {
      title: data.title,
      product_id: data.product_id,
      product_description: data.product_description,
      rating: data.rating,
      ratings_count: data.ratings_count,
      initial_price: data.initial_price,
      discount: data.discount,
      final_price: data.final_price,
      image: data.images[0],
    };
    console.log("Dipatching newData to bag: ", newData);
    dispatch(addToBag(newData));
  };
  useEffect(() => {
    if( wishlistError) {
      Notify(wishlistError);
      dispatch(resetWishlistError())
    } 
    if( wishlistMessage) {
      Notify(wishlistMessage);
      dispatch(resetWishlistMessage())
    };
    if(bagError){
      Notify(bagError)
      dispatch(resetBagStatusError())
    };
    if(bagMessage) {
      Notify(bagMessage);
      dispatch(resetBagStatusMessage());
    }
  }, [wishlistError, wishlistMessage, bagError, bagMessage]);

  if (isLoading) {
    return (
      <div className="text-2xl flex justify-center items-center font-bold">
        <p className="text-center font-bold">Loading Products...</p>;
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-2xl flex justify-center items-center font-bold">
        <p className="text-center">Error fetching Products</p>
      </div>
    );
  }
  console.log("line36(productDetails) ", item);
  return (
    <div className="min-h-screen bg-gray-100 pt-5 max-w-full mx-auto">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-500 px-5 py-2">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/clothing" className="hover:underline">
          Clothing
        </Link>{" "}
        /{" "}
        <Link to="/men-clothing" className="hover:underline">
          Men Clothing
        </Link>{" "}
        /{" "}
        <Link to="/tshirts" className="hover:underline">
          T-Shirts
        </Link>{" "}
        /{" "}
        <Link to="/hrx-tshirts" className="hover:underline text-gray-900">
          {item.product_description}
        </Link>{" "}
      </div>
      {/* Main Product Section */}
      <div className="w-full flex flex-col md:flex-row gap-5 px-5 py-5 border-2 border-gray-200 my-5">
        {/* Product Image Section */}
        <div className="w-full md:w-[50%] lg:w-[60%]  ">
          <div className="flex flex-wrap justify-items-start items-center gap-5 ">
            {item.images.map((product, idx) => (
              <div
                key={`${item.product_id}-image-${idx}`}
                className="w-[418px] h-[560px] overflow-hidden flex justify-center items-center"
              >
                <img
                  src={`${product}`}
                  alt={item.title}
                  className="w-full h-full transition hover:scale-105 "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Content Section */}
        <div className="w-full md:w-[50%] lg:w-[40%] pl-3 ">
          <div className="w-full">
            {/* Brand and Name */}
            <h1 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h1>
            <h2 className="text-lg text-gray-600">
              {item.product_description}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {item.rating} ★
              </span>
              <span className="text-gray-500 text-sm">
                {item.ratings_count} Ratings
              </span>
            </div>

            {/* Price */}
            <div className="mt-3">
              <span className="text-2xl font-semibold text-gray-800">
                {item.final_price}
              </span>
              <span className="text-sm text-gray-500 line-through ml-2">
                MRP ₹{item.initial_price}
              </span>
              <span className="text-sm text-orange-500 ml-2">
                ({item.discount}% OFF)
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">inclusive of all taxes</p>

            {/* Size Selection */}
            <div className="mt-5">
              <div className="flex justify-items-normal gap-5 items-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  SELECT SIZE
                </h3>
                <Link
                  href="#"
                  className="text-sm text-pink-500 hover:underline"
                >
                  {" "}
                  SIZE CHART{" "}
                </Link>
              </div>
              <div className="flex gap-1 mt-3">
                {[...new Map(item.sizes.map((s) => [s.size, s])).values()].map(
                  (sizeObj, index) => (
                    <button
                      key={`${sizeObj.size}-${index}-${item.product_id}`}
                      onClick={() => handleSizeSelect(sizeObj.size)}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm ${
                        selectedSize === sizeObj.size
                          ? "border-pink-500 text-pink-500"
                          : "border-gray-300 text-gray-700"
                      } ${
                        sizeObj.stock === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:border-pink-500"
                      }`}
                      disabled={sizeObj.stock === 0}
                    >
                      {sizeObj.size}
                      {sizeObj.stock <= 3 && sizeObj.stock > 0 && (
                        <span className="text-xs text-orange-500 ml-1">
                          {sizeObj.stock} left
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => bagHandler(item)}
                className="bg-pink-500 text-white font-semibold py-3 px-5 rounded-lg flex-1 hover:bg-pink-600"
              >
                ADD TO BAG
              </button>
              <button
                onClick={() => wishListHandler(item)}
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-600 font-semibold py-3 px-5 rounded-lg flex-1 hover:bg-gray-100 flex items-center justify-center gap-2"
              >
                <IoHeartOutline className="text-xl" />
                WISHLIST
              </button>
            </div>

            {/* Delivery Options */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-gray-800">
                DELIVERY OPTIONS
              </h3>
              <div className="flex items-center gap-2 mt-3">
                <MdLocationOn className="text-gray-500 text-xl" />
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pincode"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-32 outline-none"
                />
                <button className="text-pink-500 text-sm hover:underline">
                  Change
                </button>
                {pincode && (
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <FaCheckCircle className="text-green-500" />
                  </div>
                )}
              </div>
            </div>
            <div className="text-gray-800 font-bold py-5 flex flex-col gap-3">
              {item.delivery_options.map((ele, idx) => {
                return <p key={`${item.product_id}-delivery-${idx}`}>{ele}</p>;
              })}
            </div>
            <p className="">100% Original Products</p>
            <div className="mt-10 w-full">
              <p className="font-bold">BEST OFFERS </p>

              <p className="my-2 font-medium">
                Best Price: {item.best_offer.best_price}
              </p>

              <li>Applicable on: {item.best_offer.applicable_on}</li>
              <li>
                Coupon code: <strong>{item.best_offer.coupon_code}</strong>
              </li>
              <li>Coupon Discount: {item.best_offer.coupon_discount}</li>
            </div>
            <p className="text-sm font-medium my-2 text-[#f30889]">
              View Eligible Products
            </p>
            <div className="flex flex-col gap-3">
              {item.more_offers.map((ele, idx) => (
                <div key={`${item.product_id}-offer-${idx}`}>
                  <strong>{ele.offer_name}</strong>
                  <p className="font-normal">
                    <li>{ele.offer_value}</li>
                  </p>

                  <p className="text-sm font-medium my-2 text-[#f30889]">
                    Terms & Condition
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm font-medium mb-2 text-[#f30889]">View Plan</p>
            <div className="border-1 text-gray-200 my-5"> </div>
            <p className="font-medium py-2">PRODUCT DETAILS </p>
            <div>
              <ProductDetailSection item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
