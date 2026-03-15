import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdFavoriteBorder, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import logo from '../assets/logo.jpg'
import { FaBars, FaMinus, FaPlus } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import {useNavigate } from 'react-router-dom'
import { CartContext } from './cartContext'
const menuItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Profile", path: "/profile" },
];
const Nabar = () => {
    const [isActice, setIsActive] = useState("Home");
    const [sideBarActive, setSideBarActive] = useState(false);
    const [addCartSideBar, setAddCartSideBar] = useState(false)
    const navigate = useNavigate();

    const { theme, toggleTheme } = useContext(CartContext);
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-300 shadow-md">
                <div className="max-w-7xl mx-auto  py-4 flex justify-between items-center">
                    {/* Logo & Title */}
                    <div className="flex items-center space-x-3">
                        <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
                        <h1 className="text-2xl font-bold text-black select-none">Style Store</h1>
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
                                className={`text-md text-gray-700 hover:text-black cursor-pointer ${isActice === item.name ? "underline font-semibold" : ""
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Icons + Hamburger */}
                    <div className="flex items-center gap-6">
                        {/* Cart */}
                        <div className="relative cursor-pointer text-2xl text-gray-700 hover:text-black">
                            <AiOutlineShoppingCart onClick={() => setAddCartSideBar(!addCartSideBar)} />
                            <div className="absolute -top-3 left-3 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center select-none">
                                1
                            </div>
                        </div>

                        {/* Favorites */}
                        <div className="relative cursor-pointer text-2xl text-gray-700 hover:text-black">
                            <MdFavoriteBorder />
                            <div className="absolute -top-3 left-3 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex justify-center items-center select-none">
                                1
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
                    {theme === "dark"
                        ? <MdOutlineLightMode />
                        : <MdOutlineDarkMode />}
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-100 border-r border-gray-300 p-6 transform transition-transform duration-300 ease-in-out md:hidden ${sideBarActive ? "translate-x-0" : "-translate-x-full"
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
                            className={`text-left px-4 py-2 rounded-md w-full text-gray-700 hover:bg-gray-200 focus:outline-none ${isActice === item.name
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
                className={`fixed top-20 right-0 z-40 w-[400px] h-[calc(100%-80px)] bg-gray-300/50 border-l border-gray-300 py-6  px-3 transition-all duration-300 ${addCartSideBar ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className='w-full flex justify-between'>
                    <h2 className="text-lg font-bold mb-4 text-black">Favorites</h2>
                    <IoCloseSharp className='text-lg cursor-pointer' onClick={() => setAddCartSideBar(false)} />
                </div>
                {/* Add your favorite items here */}
                <div className='flex flex-col gap-3 max-h-full overflow-auto'>
                    <div className="flex bg-white rounded-lg items-center overflow-hidden min-h-28">
                        <div className="w-32 h-32 shrink-0">
                            <img
                                src="https://i.pinimg.com/736x/39/a6/ed/39a6eda528a43d1fba5d45b87aaf55cd.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-between p-4 flex-1">
                            <div>
                                <h1 className="text-lg font-semibold text-gray-800">Coca</h1>
                                <p className="text-gray-600 mt-1">Price: $10</p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center mt-4 space-x-3">
                                <button
                                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    <FaMinus className="text-gray-700" />
                                </button>
                                <span className="text-gray-800 font-medium">1</span>
                                <button
                                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    <FaPlus className="text-gray-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default Nabar