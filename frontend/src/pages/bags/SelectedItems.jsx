import React from "react";

const SelectedItems = ({ items }) => {
  return (
    <div className="p-5 font-sans">
      <h2 className="text-lg font-semibold mb-4">
        {items.length} ITEMS SELECTED
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            className="border border-gray-300 p-4 rounded flex"
            key={item._id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {item.product_description}
              </p>
              <p className="text-sm">Qty: {item.quantity}</p>
              <p className="text-sm font-semibold">
                Price: ₹{item.final_price}{" "}
                <span className="text-red-500">{item.discount}</span>
              </p>           
              <p className="text-sm text-red-500">145</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          REMOVE
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          MOVE TO WISHLIST
        </button>
      </div>
    </div>
  );
};

export default SelectedItems;
