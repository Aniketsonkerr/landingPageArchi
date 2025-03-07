import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-5 md:px-10 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="w-auto flex justify-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXnj2GoesFevhFux9wUP9njlUE4BhkaimVw51jQMgn90YSlbozPyP60MkR5CTlEA2eK8&usqp=CAU"
              alt="logo"
              className="h-20 md:h-32 rounded-2xl"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-600 items-center">
          <li className="hover:text-black transition-all duration-300">
            <Link className="no-underline text-inherit" to="/">
              Home
            </Link>
          </li>
          <li className="hover:text-black transition-all duration-300">
            <Link className="no-underline text-inherit" to="/about">
              About
            </Link>
          </li>
          <li className="hover:text-black transition-all duration-300">
            <Link className="no-underline text-inherit" to="/contact">
              Contact
            </Link>
          </li>
          <li className="bg-red-600 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300">
            <Link className="no-underline text-inherit" to="/portfolio">
              Portfolio
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-lg py-4 space-y-4 text-gray-600">
          <li>
            <Link
              className="no-underline text-inherit"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-inherit"
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-inherit"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="bg-red-600 text-white px-4 py-2 rounded-md">
            <Link
              className="no-underline text-inherit"
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      )}

      <hr className="mx-5 md:mx-10" />
    </>
  );
}

export default Header;
