"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const navigation = [
    "About",
    "Why Kazifi",
    "Solutions",
    "Features",
    "Pricing",
    "Contact",
  ];
  const linkUrl = [
    "#about",
    "#whykazifi",
    "#solutions",
    "#features",
    "#pricing",
    "#contact",
  ];
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <nav className={`navbar ${isSticky ? "is-sticky" : ""}`}>
      <div className="container relative flex flex-wrap items-center justify-between p-2 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-gray-100">
                    <span>
                      <Image
                        className="logo-img"
                        src="/logo.png"
                        alt="N"
                        width="120"
                        height="32"
                        // className="w-20"
                      />
                    </span>
                    {/* <span>Adapter</span> */}
                  </span>
                </Link>

                <div className="lg:hidden flex">
                  <ThemeChanger />

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden md:ml-auto  lg:flex ">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) =>
              menu !== "Products" ? (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={linkUrl[index]}
                    scroll={false}
                    className="inline-block px-4 py-2 text-lg font-semibold text-gray-700 no-underline rounded-md dark:text-gray-200  hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {menu}
                  </Link>
                </li>
              ) : (
                <li className="mr-3 nav__item" key={index}></li>
              )
            )}
          </ul>
        </div>

        <div className="hidden lg:flex nav__item">
          <ThemeChanger />
          <a
            className="py-2.5 px-6 mx-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
