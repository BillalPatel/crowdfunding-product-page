import Image from "next/image";

import HeroMobileImage from "../../images/image-hero-mobile.jpg";
import HeroDesktopImage from "../../images/image-hero-desktop.jpg";

export function Hero() {
  return (
    <div>
      <Image
        src={HeroMobileImage}
        alt={"Hero Mobile Image"}
        height={1000}
        width={10000}
        className="z-1 md:hidden lg:hidden"
      />
      <Image
        src={HeroDesktopImage}
        alt={"Hero Desktop Image"}
        height={10000}
        width={10000}
        className="z-1 hidden lg:flex md:flex"
      />
    </div>
  );
}
