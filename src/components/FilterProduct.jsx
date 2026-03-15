import React from "react";
import products from "./storeData";
import { Heart, ShoppingBag, Star } from "lucide-react";

const FilterProduct = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Curated Collections</h1>
      <p className="text-gray-600 mb-10">
        Discover our handpicked selection of premium clothing and accessories
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-8">

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>

            <div className="flex items-center gap-4">
              <input type="range" className="w-full" />
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>$500</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>

            <div className="space-y-2">
              <label className="flex gap-2">
                <input type="checkbox" /> T-Shirts
              </label>

              <label className="flex gap-2">
                <input type="checkbox" /> Dresses
              </label>

              <label className="flex gap-2">
                <input type="checkbox" /> Jackets
              </label>

              <label className="flex gap-2">
                <input type="checkbox" /> Pants
              </label>

              <label className="flex gap-2">
                <input type="checkbox" /> Accessories
              </label>
            </div>
          </div>

          {/* Reset Button */}
          <button className="border rounded-lg w-full py-2 hover:bg-gray-100">
            Reset Filters
          </button>
        </div>

        {/* Product Section */}
        <div className="lg:col-span-9">

          {/* Top bar */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <p className="text-gray-600">
              Showing {products.length} products
            </p>

            <select className="border rounded-lg px-4 py-2">
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
              >

                {/* Image */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />

                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                    <Heart className="cursor-pointer" size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 tracking-wide">
                    {item.category}
                  </p>

                  <h3 className="font-semibold text-lg mt-1">
                    {item.name}
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold">
                      ${item.price}
                    </span>

                    <div className="flex items-center text-sm text-gray-600">
                      <Star size={16} className="mr-1" />
                      {item.rating}
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterProduct;