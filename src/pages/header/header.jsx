import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/userContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(0);
  const path = window.location.pathname.split('/')[1];


  const headerMobile = (
    <div className="lg:hidden w-full h-[7vh] flex flex-row bg-blue-800 items-center">
      <svg
        className="ml-[4vw]"
        onClick={() => setIsOpen(!isOpen)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="white"
      >
        <rect y="4" width="24" height="2"></rect>
        <rect y="11" width="24" height="2"></rect>
        <rect y="18" width="24" height="2"></rect>
      </svg>
      {isOpen ? (
        <div className="fixed w-[100vw] h-[100vh] z-[10] top-0 left-0 bg-white flex flex-col">
          <svg
          className="ml-[4vw] mt-[4vw]"
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="black"
          >
            <rect y="4" width="24" height="2"></rect>
            <rect y="11" width="24" height="2"></rect>
            <rect y="18" width="24" height="2"></rect>
          </svg>
          <nav>
          <ul className="flex flex-col justify-center items-center space-y-[8vw] text-[7vw] mt-[20vw] text-blue-800 font-semibold ">
            <li>
              <Link to="/home"  className="hover:text-gray-300 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destination"  className="hover:text-gray-300">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/trips"  className="hover:text-gray-300">
                Itineraries
              </Link>
            </li>
            <li>
              <Link to="/about"  className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact"  className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
            <Link
            to="/login"
            className="border-[2px] border-white py-2 px-4 rounded"
          >
            {user ? "Logout" : "Login"}
          </Link>
            </li>
          </ul>
        </nav>
        
        </div>
      ):""}
    </div>
  );

  const headerWeb = (
    <header className="hidden lg:block bg-blue-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/home" className="hidden lg:block text-2xl font-bold">
            TourNest
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/home" style={{fontWeight:`${path=="home"?"bold":""}`}} className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destination" style={{fontWeight:`${path=="destination"?"bold":""}`}} className="hover:text-gray-300">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/trips" style={{fontWeight:`${path=="trips"?"bold":""}`}} className="hover:text-gray-300">
                Itineraries
              </Link>
            </li>
            <li>
              <Link to="/about" style={{fontWeight:`${path=="about"?"bold":""}`}} className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{fontWeight:`${path=="contact"?"bold":""}`}} className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link
            to="/login"
            className="border-[2px] border-white  text-white py-2 px-4 rounded"
          >
            {user ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
    </header>
  );

  return (
    <>
      {headerMobile}
      {headerWeb}
    </>
  );
};

export default Header;
