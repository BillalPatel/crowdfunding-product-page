import Image from "next/image";

import { Button } from "./Button";
import { ButtonRound } from "./ButtonRound";

import mastercraftLogo from "../../images/logo-mastercraft.svg";
import bookmarkIcon from "../../images/icon-bookmark.svg";

export function IntroBox() {
  return (
    <div className="flex flex-col justify-items-center justify-center border-solid border-slate-800 bg-white rounded-lg shadow-lg px-4 mx-auto w-10/12 text-center relative -top-12 lg:w-2/4">
      <Image
        src={mastercraftLogo}
        alt={"Bookmark Icon"}
        height={50}
        width={50}
        className="rounded-full mx-auto relative -top-7 inset-x-0"
      />
      <h1 className="font-semibold mb-4 px-10 text-lg">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-sm px-3 text-[#7a7a7a]">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="button-row flex flex-row justify-between my-10 mx-5">
        <Button text="Back this project" />
        <ButtonRound icon={bookmarkIcon} />
      </div>
    </div>
  );
}
