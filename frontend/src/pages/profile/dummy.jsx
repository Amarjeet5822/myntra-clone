import React from 'react'

function dummy() {
  return (
    <div className="flex flex-wrap min-h-screen max-w-[1400px] mx-auto">
  {/* Sidebar */}
  <div className="w-full sm:w-[25%] md:w-[20%] lg:w-[15%] p-4 border-r">
    <h2 className="text-lg font-semibold">Filters</h2>
    {/* Filter options */}
  </div>

  {/* Product Grid */}
  <div className="w-full sm:w-[75%] md:w-[80%] lg:w-[85%] p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayedProducts?.map((item) => (
        <div key={item.product_id} className="border p-4">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-full cursor-pointer"
            onClick={() => handleProductClick(item.product_id)}
          />
          <h3>{item.title}</h3>
          <p>Rs. {item.initial_price}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default dummy