
import React from "react";

const wishlistItems = [
  {
    id: 1,
    name: "Roadster The Lifestyle Co Br...",
    price: 207,
    originalPrice: 799,
    discount: "74% OFF",
    image: "https://storage.googleapis.com/a1aa/image/k5Z8nKCsmIfaFrpo_eHr-O_IgbL5q8oQMqqfu0S1mdo.jpg",
  },
  {
    id: 2,
    name: "ZEESH Men Leather Sneakers",
    price: 8199,
    originalPrice: null,
    discount: null,
    image: "https://storage.googleapis.com/a1aa/image/ypizzSHyvxDEkX9CRC8H2WgnGhX8cMsoNPDPHgTOYio.jpg",
  },
  {
    id: 3,
    name: "Red Dress",
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    image: "https://storage.googleapis.com/a1aa/image/7z-dxB78uNYAiMfxLvphmjiX2g2ITVBf3-bQFfcLRuQ.jpg",
  },
];

const Wishlist = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        My Wishlist <span className="font-normal">{wishlistItems.length} items</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="border p-4 relative">
            <img src={item.image} alt={item.name} className="w-full h-auto" />
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <i className="fas fa-times"></i>
            </button>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <div className="text-lg font-bold text-blue-600">
                Rs.{item.price}
                {item.originalPrice && (
                  <span className="text-gray-500 line-through"> Rs.{item.originalPrice}</span>
                )}
                {item.discount && <span className="text-red-600"> ({item.discount})</span>}
              </div>
              <button className="mt-2 bg-red-600 text-white py-2 px-4 rounded">
                MOVE TO BAG
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;





















// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getWishlist } from "../features/wishlistSlice";

// function Wishlist() {
//   const dispatch = useDispatch();
//   const { data: wishlist } = useSelector((state) => state.wishlist);
//   useEffect(() => {
//     dispatch(getWishlist());
//   }, []);
//   return (
//     <div className="px-5 w-full mx-auto flex min-h-40 my-10  border-gray-200 rounded">
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">
//           My Wishlist{" "}
//           <span className="font-normal">({wishlist.length} items)</span>
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {wishlist.map((item) => (
//             <div key={item.id} className="border p-4 relative">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-auto"
//                 width="300"
//                 height="400"
//               />

//               {/* Remove Button */}
//               <button
//                 onClick={() => removeFromWishlist(item.id)}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               >
//                 <i className="fas fa-times"></i>
//               </button>

//               <div className="mt-4">
//                 <h2 className="text-lg font-semibold">{item.name}</h2>

//                 <div className="text-lg font-bold text-blue-600">
//                   Rs.{item.price}
//                   {item.originalPrice && (
//                     <>
//                       <span className="text-gray-500 line-through">
//                         {" "}
//                         Rs.{item.originalPrice}
//                       </span>
//                       <span className="text-red-600"> ({item.discount})</span>
//                     </>
//                   )}
//                 </div>

//                 {/* Move to Bag Button */}
//                 <button className="mt-2 bg-red-600 text-white py-2 px-4 rounded">
//                   MOVE TO BAG
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Wishlist;
