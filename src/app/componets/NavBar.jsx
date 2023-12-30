"use client";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { id: 1, title: "About", path: "#about" },
  { id: 2, title: "Projects", path: "#projects" },
  { id: 3, title: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]  px-4 ">
      <div className="flex  flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          className="text-2xl md:text-5xl text-white font-semibold "
          href={"/"}
        >
          GO.DOC
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center  px-3 py-2 border border-slate-200 rounded-md hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 flex items-center  px-3 py-2 border border-slate-200 rounded-md hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-4 md:p-0  md:flex-row md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.id} className="">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
