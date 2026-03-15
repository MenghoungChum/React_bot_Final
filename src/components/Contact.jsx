import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side - Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 mb-8">

              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Address</p>
                  <p className="font-semibold text-gray-900">
                    St 562, Phnom Penh 12151
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="font-semibold text-gray-900">
                    +855 123 456 789
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-semibold text-gray-900">
                    gamingshop@learning.com
                  </p>
                </div>
              </div>

            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Phnom%20Penh&output=embed"
                width="100%"
                height="250"
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact