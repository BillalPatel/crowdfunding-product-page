import Image from "next/image";

import { MobileMenu } from "../components/MobileMenu";

import Logo from "../../images/logo.svg";
import HamburgerMenuIcon from "../../images/icon-hamburger.svg";

export function Header() {
  return (
    <nav className="flex flex-row justify-between w-full px-5 py-6 z-10 fixed top-0">
      <Image
        src={Logo}
        alt={"Crowdfund Logo"}
        height={10000}
        width={10000}
        className="logo h-4 w-auto"
      />
      <Image
        src={HamburgerMenuIcon}
        alt={"Hamburger Menu Icon"}
        height={10000}
        width={10000}
        className="hamburger-menu-icon h-5 w-auto cursor-pointer"
      />
      {/* <MobileMenu /> */}
    </nav>
  );
}
