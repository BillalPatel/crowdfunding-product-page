import Image from "next/image";

import { Box } from "../components/shared/Box";
import { Button } from "./Button";
import { ButtonRound } from "./ButtonRound";

import mastercraftLogo from "../../images/logo-mastercraft.svg";
import bookmarkIcon from "../../images/icon-bookmark.svg";

export function IntroBox() {
  return (
    <Box className="flex flex-col justify-items-center justify-center border-solid border-slate-800 bg-white rounded-lg shadow-lg px-4 mx-auto w-10/12 text-center relative -top-12">
      <Image
        src={mastercraftLogo}
        alt={"Bookmark Icon"}
        height={1000}
        width={1000}
        className="h-12 relative -top-7 inset-x-0"
      />
      <h1 className="font-semibold mb-4 px-10 text-lg">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-sm px-3 text-[#7a7a7a]">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="button-row flex flex-row justify-between px-2">
        <Button text="Back this project" />
        <ButtonRound icon={bookmarkIcon} />
      </div>
    </Box>
  );
}
