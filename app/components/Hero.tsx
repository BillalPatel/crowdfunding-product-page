import Image from "next/image";

import HeroMobileImage from "../../images/image-hero-mobile.jpg";

export function Hero() {
  return (
    <Image
      src={HeroMobileImage}
      alt={"Hero Mobile Image"}
      height={1000}
      width={10000}
      className=""
    />
  );
}
