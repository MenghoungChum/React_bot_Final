import React, { useState } from "react";
import products from "./storeData";
import { Heart, ShoppingBag, Star } from "lucide-react";

const FilterProduct = () => {

  const [price, setPrice] = useState(500);
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState("latest");

  const categoryList = [
    "T-Shirts",
    "Dresses",
    "Jackets",
    "Pants",
    "Accessories",
  ];

  // Toggle category
  const handleCategory = (cat) => {
    if (categories.includes(cat)) {
      setCategories(categories.filter((c) => c !== cat));
    } else {
      setCategories([...categories, cat]);
    }
  };

  // Filter products
  let filteredProducts = products.filter((item) => {
    const priceMatch = item.price <= price;
    const categoryMatch =
      categories.length === 0 || categories.includes(item.category);

    return priceMatch && categoryMatch;
  });

  // Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const resetFilters = () => {
    setPrice(500);
    setCategories([]);
    setSort("latest");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold mb-2">Curated Collections</h1>
      <p className="text-gray-600 mb-10 dark:text-white">
        Discover our handpicked selection of premium clothing and accessories
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-8">

          {/* Price Range */}
          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>

            <input
              type="range"
              min="0"
              max="500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full"
            />

            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>${price}</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>

            <div className="space-y-2">
              {categoryList.map((cat) => (
                <label key={cat} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={categories.includes(cat)}
                    onChange={() => handleCategory(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={resetFilters}
            className="border rounded-lg w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Reset Filters
          </button>
        </div>

        {/* Products */}
        <div className="lg:col-span-9">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <p className="text-gray-600 dark:text-white">
              Showing {filteredProducts.length} products
            </p>

            <select
              className="border rounded-lg px-4 py-2"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProducts.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />

                  <button className="absolute top-4 right-4 dark:text-black bg-white p-2 rounded-full shadow">
                    <Heart size={18} />
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-white">
                    {item.category}
                  </p>

                  <h3 className="font-semibold text-lg mt-1">
                    {item.name}
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold">
                      ${item.price}
                    </span>

                    <div className="flex items-center text-sm text-gray-600 dark:text-white">
                      <Star size={16} className="mr-1" />
                      {item.rating}
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-400 transition">
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