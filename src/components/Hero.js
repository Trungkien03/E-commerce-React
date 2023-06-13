import React from "react";
//import image
import WomanImg from "../img/woman_hero.png";
import BlackMan from "../img/black_man.png";
//import link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className=" bg-blue-100 h-[850px] 
  bg-no-repeat bg-cover bg-center py-24"
    >
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <div>New Trend</div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTMN SALE STYLISH <br />
            <span className="font-semibold">MENS AND WOMEN</span>
          </h1>
          <Link
            to={"/about"}
            className="self-start uppercase font-semibold
                    border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block w-[600px]">
          <img src={BlackMan} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
