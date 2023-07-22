import Image from "next/image";

import { Button } from "./Button";
import { ButtonRound } from "./ButtonRound";

import mastercraftLogo from "../../images/logo-mastercraft.svg";
import bookmarkIcon from "../../images/icon-bookmark.svg";

export function Box() {
  return (
    <div className="flex flex-col justify-items-center justify-center border-solid border-slate-800 bg-slate-200 rounded-lg shadow-2xl mx-auto w-11/12 text-center">
      <Image
        src={mastercraftLogo}
        alt={"Bookmark Icon"}
        height={1000}
        width={1000}
        className="h-12 w-auto"
      />
      <h1 className="font-semibold my-5 px-10">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-sm px-3">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="button-row flex flex-row justify-between px-2">
        <Button text="Back this project" />
        <ButtonRound icon={bookmarkIcon} />
      </div>
    </div>
  );
}
