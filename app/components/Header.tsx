import Image from "next/image";

import Logo from "../../images/logo.svg";
import HamburgerMenuIcon from "../../images/icon-hamburger.svg";

export function Header() {
  return (
    <div className="flex flex-row justify-between px-5 py-6 bg-black z-50">
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
    </div>
  );
}
