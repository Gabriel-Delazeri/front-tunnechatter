/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
      <nav className="z-10 bg-transparent top-0 left-0 w-full mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-indigo-300 text-3xl font-bold">Tune</span>
                <span className="text-white text-3xl font-bold">Chatter</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/albums" className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    ALBUMS
                  </Link>
                  <a className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    LISTS
                  </a>
                  <a className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    MEMBERS
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative">
                  <div className="ml-3 relative">
                    <div>
                      <button
                        type="button"
                        className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none"
                        id="user-menu"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={handleDropdownToggle}
                      >
                        <span className="sr-only">Abrir perfil</span>
                        <img
                          className="h-8 w-8 rounded-full border-2 border-gray-200"
                          src="https://avatars.githubusercontent.com/u/92875263?v=4"
                          alt="Logo do Usuário"
                        />
                      </button>
                    </div>
                    {dropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Profile
                        </a>
                        <a
                          href="#"
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-white hover:text-white focus:outline-none focus:text-white"
                onClick={handleMobileMenuToggle}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mobileMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H19C19.5523 7 20 6.55228 20 6ZM19 17C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H19Z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM19 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11ZM20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18Z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  ALBUMS
                </a>
                <a className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  LISTS
                </a>
                <a className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  MEMBERS
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
