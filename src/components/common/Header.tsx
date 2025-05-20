import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../src/assets/css/main.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header h-[82px] fixed top-0 right-0 left-0 flex items-center px-0 lg:px-5 w-full bg-white border-b border-[rgba(72,78,134,0.1)] z-[1000]`}>
      <nav className="container flex justify-between items-center">
        <Link to="/">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-[#111111] to-[#0E33C0] bg-clip-text text-transparent">
            Migrately
          </h4>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          <NavLink to="#" className="text-sm text-[#232857] leading-[100%] font-bold cursor-pointer">About Us</NavLink>
          <NavLink to="#" className="text-sm text-[#232857] leading-[100%] cursor-pointer">For Individual</NavLink>
          <NavLink to="#" className="text-sm text-[#232857] leading-[100%] cursor-pointer">For Lawyers</NavLink>
          <NavLink to="#" className="text-sm text-[#232857] leading-[100%] cursor-pointer">Blog</NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="items-center gap-2.5 lg:flex hidden">
          <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-white border border-[rgba(72,78,134,0.2)] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-[#232857] hover:border-[#232857] hover:text-[#232857]">
            Schedule a call
          </Link>
          <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-[#0E33C0] border border-[#0E33C0] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-white shadow-[0px_0px_28.02px_0px_#0000003B]">
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            className="lg:hidden focus:outline-none cursor-pointer w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-4 bg-black transition-all duration-300 object-contain ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`h-0.5 w-4 bg-black transition-all duration-300 object-contain ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden h-screen fixed top-[82px] left-0 right-0 bg-black shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"}`}>
        <div className="container flex items-start flex-col p-0 gap-5 lg:gap-0">
          <NavLink to="#" className="text-lg text-white leading-[100%] cursor-pointer font-bold">About Us</NavLink>
          <NavLink to="#" className="text-lg text-white leading-[100%] cursor-pointer">For Individual</NavLink>
          <NavLink to="#" className="text-lg text-white leading-[100%] cursor-pointer">For Lawyers</NavLink>
          <NavLink to="#" className="text-lg text-white leading-[100%] cursor-pointer">Blog</NavLink>
          <Link to="/plan" className="w-[114px] h-[36px] rounded-[160px] bg-white cursor-pointer hidden lg:flex items-center justify-center">
            <p className="text-base text-[#292929]">Pick a Plan</p>
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="items-center gap-2.5 xl:hidden flex mt-5 ml-5">
          <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-white border border-[rgba(72,78,134,0.2)] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-[#232857] hover:border-[#232857] hover:text-[#232857]">
            Schedule a call
          </Link>
          <Link to="/" className="w-[138px] h-10.5 flex items-center justify-center bg-[#0E33C0] border border-[#0E33C0] text-base leading-[150%] tracking-[-2%] rounded-[5px] text-white shadow-[0px_0px_28.02px_0px_#0000003B]">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
