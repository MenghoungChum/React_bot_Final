import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import image1 from '../assets/man1.jpg'
import image2 from '../assets/man2.jpg'
import image3 from '../assets/man3.jpg'
import image4 from '../assets/man4.jpg'

const testimonials = [
  {
    name: "Alex Chen",
    role: "Professional Gamer",
    rating: 5,
    text: "The quality of products here is unmatched. My new setup has significantly improved my gameplay and streaming quality.",
    image: image1,
  },
  {
    name: "Sofia Ramirez",
    role: "Twitch Streamer",
    rating: 4,
    text: "Fast shipping and great customer support. The monitor I bought really enhances my gaming experience.",
    image: image2,
  },
  {
    name: "Ryan Lee",
    role: "Esports Coach",
    rating: 5,
    text: "Fast shipping, excellent customer service, and top-tier gaming gear.",
    image:image3,
  },
  {
    name: "Ryan Lee",
    role: "Esports Coach",
    rating: 5,
    text: "Fast shipping, excellent customer service, and top-tier gaming gear.",
    image:image4,
  },
];

const FeedBack = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Testimonial
        </h2>
        <p className="text-gray-600 mt-2">
          Join thousands of satisfied gamers who trust us
        </p>
      </div>

      <div className="max-w-7xl mx-auto">

        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full">

                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-gray-700 text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-600 mb-8">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default FeedBack;