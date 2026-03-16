import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  MdFavoriteBorder,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import logo from "../assets/logo.jpg";
import { FaBars, FaMinus, FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext";
const menuItem = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "Profile", path: "/profile" },
];
const Nabar = () => {
  const [isActice, setIsActive] = useState("Home");
  const [sideBarActive, setSideBarActive] = useState(false);
  const [addCartSideBar, setAddCartSideBar] = useState(false);
  const navigate = useNavigate();
  const {
    theme,
    toggleTheme,
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    favourites
  } = useContext(CartContext);
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Header */}
      <header className="bg-gray-100 dark:bg-black border-b border-gray-300 shadow-md">
        <div className="max-w-7xl mx-auto  py-4 flex justify-between items-center">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <h1 className="text-2xl font-bold text-black select-none">
              Style Store
            </h1>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6">
            {menuItem.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsActive(item.name);
                  navigate(item.path);
                }}
                className={`text-md dark:text-white text-gray-700 hover:text-black cursor-pointer ${
                  isActice === item.name ? "underline font-semibold" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Icons + Hamburger */}
          <div className="flex justify-center items-center gap-14">
            <div className="flex items-center gap-4">
              {/* Cart */}
              <div className="relative cursor-pointer text-2xl text-gray-700 hover:text-black">
                <AiOutlineShoppingCart
                  onClick={() => setAddCartSideBar(!addCartSideBar)}
                />
                <div className="absolute -top-3 left-3 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center select-none">
                  {cart.length}
                </div>
              </div>

              {/* Favorites */}
              <div className="relative cursor-pointer text-2xl text-gray-700 hover:text-black">
                <MdFavoriteBorder />
                <div className="absolute -top-3 left-3 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center select-none">
                  {favourites.length}
                </div>
              </div>

              {/* Hamburger */}
              <div
                onClick={() => setSideBarActive(!sideBarActive)}
                className="text-lg cursor-pointer md:hidden text-gray-700 hover:text-black"
              >
                <FaBars />
              </div>
            </div>
            {/* dark mode and light mode */}
            <button onClick={toggleTheme} className="text-2xl">
              {theme === "dark" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-100 border-r border-gray-300 p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          sideBarActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {menuItem.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsActive(item.name);
                setSideBarActive(false);
              }}
              className={`text-left px-4 py-2 rounded-md w-full text-gray-700 hover:bg-gray-200 focus:outline-none ${
                isActice === item.name
                  ? "bg-blue-500 text-white font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* aside for add to cart */}
<aside
  className={`fixed top-20 right-0 z-40 w-[400px] h-[calc(100%-80px)] bg-gray-300 dark:bg-gray-900 border-l border-gray-300 py-6 px-3 transition-all duration-300 ${
    addCartSideBar ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="w-full flex justify-between items-center mb-4">
    <h2 className="text-lg font-bold text-black dark:text-white">
      Cart
    </h2>

    <IoCloseSharp
      className="text-xl cursor-pointer"
      onClick={() => setAddCartSideBar(false)}
    />
  </div>

  {/* Cart Items */}
  <div className="flex flex-col gap-3 h-[75%] overflow-auto pr-1">

    {cart.length === 0 ? (
      <div className="flex justify-center items-center h-40 text-gray-500 dark:text-gray-300">
        No Product in Cart 🛒
      </div>
    ) : (

      cart.map((item) => (

        <div
          key={item.id}
          className="flex bg-white rounded-lg items-center overflow-hidden min-h-28 dark:bg-gray-800 relative"
        >

          {/* Remove Product */}
          <IoCloseSharp
            onClick={() => removeFromCart(item.id)}
            className="absolute top-2 right-2 text-xl cursor-pointer text-gray-600 hover:text-red-500"
          />

          {/* Image */}
          <div className="w-28 h-28 shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between p-4 flex-1">

            <div>
              <h1 className="text-md font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h1>

              <p className="text-gray-600 mt-1 dark:text-gray-300">
                ${item.price}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center mt-3 space-x-3">

              <button
                onClick={() => decreaseQty(item.id)}
                className="p-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                <FaMinus className="text-gray-700" />
              </button>

              <span className="text-gray-800 dark:text-white font-medium">
                {item.qty}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                className="p-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                <FaPlus className="text-gray-700" />
              </button>

            </div>

          </div>

        </div>

      ))

    )}

  </div>

  {/* Footer */}
  {cart.length > 0 && (
    <div className="mt-4 flex flex-col gap-3">

      <button
        onClick={clearCart}
        className="bg-red-500 py-2 rounded-lg text-white hover:bg-red-600"
      >
        Clear All
      </button>

    </div>
  )}

</aside>

    </div>
  );
};

export default Nabar;
