import { useState } from "react";
import Logo from "/Logo.svg";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full shadow-[0_75px_150px_2px_rgba(0,0,0,0.25)] shadow-[#9747ff48] p-4">
      <div className="flex items-center justify-between">
        {/* Logo section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16">
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </div>
          <div className="flex ">
            <span className="text-black font-bold text-lg md:text-xl">Learn</span>
            <span className="text-[#9747FF] font-bold text-lg md:text-xl">Ledger</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#9747FF] text-lg font-bold"
                : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "text-[#9747FF] text-lg font-bold"
                : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/docs"
            className={({ isActive }) =>
              isActive
                ? "text-[#9747FF] text-lg font-bold"
                : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
            }
          >
            Docs
          </NavLink>
          <NavLink
            to="/whitepaper"
            className={({ isActive }) =>
              isActive
                ? "text-[#9747FF] text-lg font-bold"
                : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
            }
          >
            Whitepaper
          </NavLink>
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex flex-row gap-4 items-center justify-around bg-[#eadaff] p-2 rounded-full py-3">
          <div className="bg-white shadow-md p-2 rounded-full">
            <a href="#" className="text-gray-600 hover:text-[#6B46C1] transition-colors">
              <FaTelegram color="#6B46C1" />
            </a>
          </div>
          <div className="bg-white shadow-md p-2 rounded-full">
            <a href="#" className="text-gray-600 hover:text-[#6B46C1] transition-colors">
              <FaXTwitter color="#6B46C1" />
            </a>
          </div>
          <div className="bg-white shadow-md p-2 rounded-full">
            <a href="#" className="text-gray-600 hover:text-[#6B46C1] transition-colors">
              <FaDiscord color="#6B46C1" />
            </a>
          </div>
        </div>

        {/* Hamburger button - Mobile only */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-[#9747FF] hover:bg-[#eadaff] md:hidden transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 z-50 border border-gray-100">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9747FF] text-lg font-bold"
                  : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9747FF] text-lg font-bold"
                  : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Product
            </NavLink>
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9747FF] text-lg font-bold"
                  : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Docs
            </NavLink>
            <NavLink
              to="/whitepaper"
              className={({ isActive }) =>
                isActive
                  ? "text-[#9747FF] text-lg font-bold"
                  : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Whitepaper
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}