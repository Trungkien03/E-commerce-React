import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="lg:hidden">
        <div className="relative">
          <div className="m-3 hover:text-blue-300 cursor-pointer" onClick={toggleDropdown}>
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
          {isOpen && (
            <div className="absolute top-full text-xl left-1/2 transform -translate-x-1/2 text-center py-2 w-80 rounded-md shadow-lg z-10 transition"  id="dropdownMenu">
              <div className="p-2">
                <Link to={"/"}>Home</Link>
              </div>
              <div className="p-2">
                <Link to={"/about"}>About Us</Link>
              </div>
              <div className="p-2">
                <Link to={"/allProducts"}>Products</Link>
              </div>
              <div className="p-2">
                <Link to={"/contact"}>Contact</Link>
              </div>
              <div className="p-2">
                <Link to={"/login"}>Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden lg:flex gap-20">
        <div className="hover:text-blue-300">
          <Link to={"/"}> Home </Link>
        </div>
        <div className="hover:text-blue-300">
          <Link to={"/about"}>About Us</Link>
        </div>
        <div className="hover:text-blue-300">
          <Link to={"/allProducts"}>Products</Link>
        </div>
        <div className="hover:text-blue-300">
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="hover:text-blue-300">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};
