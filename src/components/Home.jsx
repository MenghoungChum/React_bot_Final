import React from 'react'
import banner from '../assets/banner.jpg'

const Home = () => {
  return (
    <section className="py-20 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl dark:text-white md:text-6xl font-serif font-semibold text-gray-900 leading-tight">
            Timeless <br />
            Elegance Meets <br />
            Modern Style
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg">
            Curated collections of premium clothing and accessories designed
            for those who appreciate quality craftsmanship and contemporary
            aesthetics.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Shop Collection
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="w-full h-[500px] rounded-2xl flex flex-col justify-center items-center text-center">
            <img src={banner} alt="" className='w-full h-full object-cover rounded-lg' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home