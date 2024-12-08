import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu
  const navigate = useNavigate();

  return (
    <nav
      className="flex lg:h-[5rem] md:h-[4rem] h-[3rem] justify-between items-center px-2 md:px-8 mt-0 rounded-none"
      style={{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        position: "fixed",
        zIndex: 99,
        width: "100vw",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="text-base font-medium">
          <img
            src="https://appopen.io/super_admin/assets_lading/img/appopen/logo.png"
            alt="Logo"
            className="!h-8 md:!h-10"
          ></img>
        </span>
      </div>
      <div></div>
      {/* Menu for larger screens */}
      <div className="hidden md:flex gap-4 text-sm md:text-base grow justify-center">
        <Link
          to={"/"}
          className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition self-center"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition self-center"
        >
          About
        </Link>
        <Link
          to={"/app-store"}
          className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition self-center"
        >
          App Store
        </Link>
        <Link
          to={"/pricing"}
          className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition self-center"
        >
          Pricing
        </Link>
        <Link
          to={"/contact"}
          className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition self-center"
        >
          Contact
        </Link>
        <Link
          to={"/careers"}
          className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition self-center"
        >
          Careers
        </Link>
        <Link
          to={"/community"}
          className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition self-center"
        >
          Community
        </Link>
      </div>

      {/* Links */}
      <div className="hidden md:flex justify-center items-center">
        <Link className="text-sm md:text-base lg:text-lg px-3 md:px-5 py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffff1a] text-[#ffffff] transition">
          Login
        </Link>
        <Link
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            navigate("/signup");
          }}
          className="text-xs md:text-sm lg:text-base bg-white text-black px-1/2 md:px-2 lg:px-3 py-1/2 md:py-1 lg:py-2 rounded-[8px] hover:rounded-[8px] hover:bg-[#ffffffaf] transition ml-2 "
        >
          Get Started
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <Link
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <Menu />
        </Link>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col absolute top-16 left-0 w-full bg-black text-white shadow-lg rounded-b-lg transition-all duration-300 ease-in-out">
          <Link
            to={"/"}
            className="px-6 py-4 hover:bg-[#ffffff1a] text-white transition-all duration-200 ease-in-out text-lg"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="px-6 py-4 hover:bg-[#ffffff1a] text-white transition-all duration-200 ease-in-out text-lg"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="px-6 py-4 hover:bg-[#ffffff1a] text-white transition-all duration-200 ease-in-out text-lg"
          >
            Contact
          </Link>
          <Link
            to={"/app-store"}
            className="px-6 py-4 hover:bg-[#ffffff1a] text-white transition-all duration-200 ease-in-out text-lg"
          >
            AppStore
          </Link>
          <Link
            to={"/pricing"}
            className="px-6 py-4 hover:bg-[#ffffff1a] text-white transition-all duration-200 ease-in-out text-lg"
          >
            Pricing
          </Link>
          <Link
            to={"/careers"}
            className="px-6 py-4 hover:bg-[#ffffff1a] text-white transition-all duration-200 ease-in-out text-lg"
          >
            Careers
          </Link>
          <Link
            to={"/community"}
            className="px-6 py-4 hover:bg-[#ffffff1a] text-white transition-all duration-200 ease-in-out text-lg"
          >
            Community
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
