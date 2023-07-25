"use client";

// import React, { useState } from "react";

import { Button } from "../Button";

export function PledgeBox(props: any) {
  const { radio, title, pledgeAmount, copyText, remainingAmount, buttonText } =
    props;

  // const [isRadioSelected, setIsRadioSelected] = useState(false);

  return (
    <div className="flex flex-col mx-auto justify-items-center border border-[#7a7a7a] rounded-lg pt-7 px-7 pb-4 text-left border-opacity-20">
      <div className="flex lg:flex-row w-full md:justify-between lg:justify-between">
        <div className="flex flex-row">
          {radio && (
            <div className="h-5 w-5 bg-none border border-solid border-blue-800 rounded-full mr-5 flex self-center">
              <div className="h-3 w-3 bg-none border border-solid bg-[#3cb4ac] rounded-full flex self-center mx-auto"></div>
            </div>
          )}
          <h1 className="font-bold text-base">{title}</h1>
        </div>
        {pledgeAmount && (
          <h1 className="flex md:justify-right font-semibold text-[#3cb4ac]">{`Pledge $${pledgeAmount} or more`}</h1>
        )}
      </div>
      <p className="text-sm  text-[#7a7a7a] my-5 leading-6">{copyText}</p>
      <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between align-middle">
        {remainingAmount && (
          <p className="text-3xl font-extrabold my-5 flex align-middle">
            {remainingAmount}
            <span className="mx-2 text-sm font-thin text-[#7a7a7a] flex self-center">
              left
            </span>
          </p>
        )}
        {buttonText && (
          <div className="button-row flex flex-row justify-between">
            <Button text={buttonText} />
          </div>
        )}
      </div>
    </div>
  );
}
