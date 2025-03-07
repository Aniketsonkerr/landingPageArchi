import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className=" flex flex-row justify-between items-center text-2xl mx-10">
        <div className="w-1/5 flex justify-center h-auto">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXnj2GoesFevhFux9wUP9njlUE4BhkaimVw51jQMgn90YSlbozPyP60MkR5CTlEA2eK8&usqp=CAU"
              alt="logo"
              className=" h-32 rounded-2xl "
            ></img>
          </Link>
        </div>
        <ul className=" flex md:flex-row justify-between w-1/2 flex-col font-semibold text-gray-600 items-center">
          <li className="hover:text-3xl duration-300 ease-in-out">
            <Link
              className="no-underline text-inherit hover:text-black"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-3xl duration-300 ease-in-out">
            <Link className="no-underline text-inherit hover:text-black">
              About
            </Link>
          </li>
          <li className="hover:text-3xl duration-300 ease-in-out">
            <Link
              className="no-underline text-inherit hover:text-black"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li className="hover:text-3xl duration-300 ease-in-out bg-red-600 text-white p-2">
            <Link className="no-underline text-inherit">Portfolio</Link>
          </li>
        </ul>
      </div>
      <hr className="mx-9" />
    </>
  );
}

export default Header;
