import Logo from "/Logo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white w-full shadow-[0_75px_150px_2px_rgba(0,0,0,0.25)] shadow-[#9747ff48] p-4 flex flex-row items-center justify-between lg:gap-10">
      <div className="flex items-center w-[30%] gap-4 justify-center">
        <div className="w-16 h-16">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-black font-bold text-xl">Learn</span>
          <span className="text-[#9747FF] font-bold text-xl">Ledger</span>
        </div>
      </div>

      <div className="flex w-[50%] items-center justify-around h-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#9747FF] text-lg font-bold"
              : "text-gray-600 text-lg  hover:text-[#9747FF] transition-colors"
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

      <div className="flex flex-row gap-4 w-[20%] items-center justify-around bg-[#eadaff] p-2 rounded-full py-3 lg:py-2">
        <div className="bg-white shadow-md p-2 lg:p-3 rounded-full">
          <a href="#" className="text-gray-600 hover:text-[#6B46C1] transition-colors">
            <FaTelegramPlane color="#6B46C1" />
          </a>
        </div>
        <div className="bg-white shadow-md p-2 lg:p-3  rounded-full">
          <a href="#" className="text-gray-600 hover:text-[#6B46C1] transition-colors">
            <FaXTwitter color="#6B46C1" />
          </a>
        </div>
        <div className="bg-white shadow-md p-2 lg:p-3  rounded-full">
          <a href="#" className="text-gray-600 hover:text-[#6B46C1] transition-colors">
            <FaDiscord color="#6B46C1" />
          </a>
        </div>
      </div>
    </nav>
  );
}
