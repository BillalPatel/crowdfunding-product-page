"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "./Button";

import tickIcon from "../../images/icon-check.svg";

export function ThankYouModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed top-1/4 lg:top-1/3 left-0 right-0 mx-auto bg-white rounded-lg shadow-lg w-11/12 lg:w-4/12 z-100 flex flex-col justify-items-center text-center space-y-9 p-10">
      <Image
        src={tickIcon}
        height={1000}
        width={1000}
        alt="Tick icon"
        className="h-20 w-auto mx-auto"
      />
      <div className="space-y-4">
        <h1 className="title text-2xl font-bold">Thanks for your support!</h1>
        <p className="text-[#7A7A7A] leading-7">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
      </div>
      <Button text={"Got it!"} />
    </div>
  );
}
