"use client";

import { useState } from "react";
import Image from "next/image";

import { MobileMenu } from "../components/MobileMenu";

import logo from "../../images/logo.svg";
import hamburgerMenuIcon from "../../images/icon-hamburger.svg";
import closeMenuIcon from "../../images/icon-close-menu.svg";

export function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  function handleHamburgerMenuClick() {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  }

  return (
    <nav className="flex flex-row justify-between w-full px-5 py-6 z-10 fixed max-w-screen-3xl lg:px-32">
      <Image
        src={logo}
        alt={"Crowdfund Logo"}
        height={10000}
        width={10000}
        className="logo h-4 w-auto"
      />
      <Image
        src={!isHamburgerMenuOpen ? hamburgerMenuIcon : closeMenuIcon}
        alt={"Hamburger Menu Icon"}
        height={10000}
        width={10000}
        className="hamburger-menu-icon h-5 w-auto cursor-pointer md:hidden lg:hidden"
        onClick={handleHamburgerMenuClick}
      />
      <ul className=" md:flex lg:flex flex-row text-[#ffffff] text-sm space-x-10 hidden cursor-pointer">
        <li className="hover:font-semibold">About</li>
        <li className="hover:font-semibold">Discover</li>
        <li className="hover:font-semibold">Get Started</li>
      </ul>
      {isHamburgerMenuOpen && <MobileMenu />}
    </nav>
  );
}
