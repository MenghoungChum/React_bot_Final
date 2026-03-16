
import React, { useContext } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import products from "./storeData";
import { CartContext } from "./cartContext";

const Popular = () => {

  const { addToCart, favourites, toggleFavourite } = useContext(CartContext);

  return (
    <section className="py-16 px-6">

      <h2 className="text-4xl font-bold text-center my-10 dark:text-white">
        Popular Product
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {products.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition dark:bg-gray-800"
          >

            {/* Image */}
            <div className={`h-56 ${item.color} relative`}>

              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.name}
              />

              {/* Favourite */}
              <button
                onClick={() => toggleFavourite(item)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
              >
                <Heart
                  size={18}
                  className={`cursor-pointer dark:text-black ${
                    favourites.find((fav) => fav.id === item.id)
                      ? "text-red-500 fill-red-500"
                      : "text-black"
                  }`}
                />
              </button>

            </div>

            {/* Content */}
            <div className="p-6">

              <p className="text-sm text-gray-500 tracking-wide dark:text-white">
                {item.category}
              </p>

              <h3 className="font-semibold text-lg mt-1 text-gray-500 dark:text-white">
                {item.name}
              </h3>

              <div className="flex justify-between items-center mt-4 text-gray-500 dark:text-white">

                <span className="text-2xl font-bold">
                  ${item.price}
                </span>

                <div className="flex items-center text-sm text-gray-600 dark:text-white">
                  <Star size={16} className="mr-1" />
                  {item.rating}
                </div>

              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(item)}
                className="mt-6 w-full bg-black dark:bg-white dark:text-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-400 transition"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Popular;
