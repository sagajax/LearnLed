import { useState } from "react";
import Logo from "/Logo.svg";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white w-full md:shadow-[0_75px_150px_2px_rgba(0,0,0,0.25)] shadow-[#9747ff48] p-1 fixed top-0 z-[1000]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
          <div className="flex flex-col">
            <span className="text-[#7BD28E] font-bold text-lg md:text-xl">
              Learn
            </span>
            <span className="text-[#9747FF] font-bold text-lg md:text-xl">
              Ledger
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-16">
          {[
            { path: "/", label: "Home" },
            { path: "/product", label: "Product" },
            { path: "/docs", label: "Docs" },
            { path: "/whitepaper", label: "Whitepaper" },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#9747FF] text-lg font-bold"
                  : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex flex-row gap-6 lg:gap-8 items-center justify-around bg-[#eadaff] p-2 rounded-full ">
          {[FaTelegram, FaXTwitter, FaDiscord].map((Icon, index) => (
            <div
              key={index}
              className="bg-white shadow-md  rounded-full w-10 h-10 lg:w-12 lg:h-12"
            >
              <div className="flex items-center justify-center w-full h-full">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#6B46C1] transition-colors"
                >
                  <Icon size={24} color="#6B46C1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Hamburger Menu Button - Mobile */}
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
            {[
              { path: "/", label: "Home" },
              { path: "/product", label: "Product" },
              { path: "/docs", label: "Docs" },
              { path: "/whitepaper", label: "Whitepaper" },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#9747FF] text-lg font-bold"
                    : "text-gray-600 text-lg hover:text-[#9747FF] transition-colors"
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
