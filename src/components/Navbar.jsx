import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContextProvider";
import logo from "../img/cinema.png";
import Switch from "./Switch";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <nav className="w-full flex flex-row items-center justify-evenly bg-rose-700 rounded-b-lg  text-white shadow-lg navbar navbar-expand-lg fixed-top">
        <div className="p-2 container-fluid w-full flex items-center justify-between px-3">
          <Link className="text-2xl logo-img" to="/react-movie-app">
            <img width="70px" src={logo} alt="logo" />
          </Link>

          <div className="flex items-center relative">
            <Switch />
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>
            )}

            <div className="dropdown relative">
              <span
                className="dropdown-toggle flex items-center hidden-arrow"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={currentUser?.photoURL || avatar}
                  className="rounded-full user-img"
                  alt="user"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </span>
              <ul
                className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  {!currentUser && (
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/register"
                    >
                      Register
                    </Link>
                  )}
                </li>
                <li>
                  {!currentUser && (
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/react-movie-app"
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li>
                  {currentUser && (
                    <span
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      role="button"
                      onClick={() => logOut()}
                    >
                      Logout
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;