"use client";

// import React, { useState } from "react";

import { Button } from "../Button";

export function PledgeBox(props: any) {
  const {
    radio,
    selected,
    onClick,
    title,
    pledgeAmount,
    copyText,
    remainingAmount,
    inStock,
    buttonText,
  } = props;

  // const [isRadioSelected, setIsRadioSelected] = useState(false);

  return (
    <div className="flex flex-col justify-items-center border border-[#7a7a7a] rounded-lg py-6 lg:py-8 lg:pb-4 px-7 text-left border-opacity-20">
      <div className="flex flex-col lg:flex-row w-full lg:justify-between space-y-1 lg:space-y-0 mb-3 ">
        <div className="flex flex-row">
          {radio && (
            <div className="radio-outer h-5 w-5 bg-none border border-solid border-blue-800 rounded-full mr-5 flex self-center cursor-pointer">
              {selected && (
                <div className="radio-inner h-3 w-3 bg-none border border-solid bg-[#3cb4ac] rounded-full flex self-center mx-auto"></div>
              )}
            </div>
          )}
          <h1 className="font-bold">{title}</h1>
        </div>
        {pledgeAmount && (
          <h2 className="flex md:justify-right font-semibold text-[#3cb4ac]">{`Pledge $${pledgeAmount} or more`}</h2>
        )}
      </div>
      <p className="text-sm  text-[#7a7a7a] my-5 leading-6">{copyText}</p>
      <div className="flex flex-col lg:flex-row lg:justify-between align-middle space-y-4 lg:space-y-0">
        {remainingAmount && (
          <p className="text-3xl font-extrabold my-2 flex align-middle">
            {remainingAmount}
            <span className="mx-2 text-sm font-thin text-[#7a7a7a] flex self-center">
              left
            </span>
          </p>
        )}
        {buttonText && (
          <div
            className="button-row flex flex-row justify-between"
            onClick={onClick}
          >
            <Button text={buttonText} inStock={inStock} />
          </div>
        )}
      </div>
    </div>
  );
}
