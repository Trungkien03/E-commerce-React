import React, { useContext, useEffect, useState } from "react";
//sidebar Context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag} from "react-icons/bs";
//import link
import { Link } from "react-router-dom";
//import logo
import Logo from "../img/logo.svg";
import { Menu } from "./Menu";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} 
    fixed w-full z-10 transition-all`}
    >
      <div
        className="container mx-auto flex items-center
      justify-between h-full"
      >
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} />
          </div>
        </Link>
        {/* Menu */}
        <Menu/>
        {/* cart */}
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="cursor-pointer flex relative max-w-[50px] "
        >
          <BsBag className="text-2xl" />
          <div
            className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] 
        text-white rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
