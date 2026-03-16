import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-700 py-12 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
    {/* Logo + Description + Social */}
    <div className="md:col-span-2">
      <div className="flex items-center mb-4">
        
      
      </div>
      <p className="text-gray-600 mb-6 max-w-sm dark:text-white">
        Your ultimate destination for premium clothing, accessories, and the
        latest styles. Level up your wardrobe with us.
      </p>
      <div className="flex space-x-4">
        {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch].map(
          (Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="bg-gray-300 hover:bg-gray-400 transition-colors rounded-md p-2 text-gray-700"
              aria-label="Social Media Link"
            >
              <Icon />
            </a>
          )
        )}
      </div>
    </div>

    {/* Shop Links */}
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">Shop</h3>
      <ul className="space-y-2 text-gray-600 dark:text-white">
        <li>
          <a href="#" className="hover:text-gray-900">
            New Arrivals
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Men
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Women
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Accessories
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Sale
          </a>
        </li>
      </ul>
    </div>

    {/* Support Links */}
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
      <ul className="space-y-2 text-gray-600 dark:text-white">
        <li>
          <a href="#" className="hover:text-gray-900">
            Help Center
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Shipping Info
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Returns
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Warranty
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Contact Us
          </a>
        </li>
      </ul>
    </div>

    {/* Company Links */}
    <div>
      <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-gray-600 dark:text-white">
        <li>
          <a href="#" className="hover:text-gray-900">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Careers
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-900">
            Terms of Service
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
    <p>© 2025 GameXtreme. All rights reserved.</p>
    <div className="space-x-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-gray-700">
        Privacy
      </a>
      <a href="#" className="hover:text-gray-700">
        Terms
      </a>
      <a href="#" className="hover:text-gray-700">
        Cookies
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;