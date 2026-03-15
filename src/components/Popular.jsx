import { Heart, ShoppingBag, Star } from 'lucide-react';
import products from './storeData';
const Popular = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
        <h2 className='text-4xl font-bold text-center my-10'>Popular product</h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition"
          >
            
            {/* Image */}
            <div className={`h-56 ${item.color} relative`}>
                <img src={item.image}  className="w-full h-full object-cover" alt="" />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                <Heart className='cursor-pointer' size={18} />
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
    </section>

  )
}

export default Popular