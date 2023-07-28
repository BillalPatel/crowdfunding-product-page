"use client";

import React, { createContext, useContext, useState } from "react";
import Image from "next/image";

import { ModalPledgeBox } from "./shared/ModalPledgeBox";
import { Overlay } from "./shared/Overlay";

import crossIcon from "../../images/icon-close-modal.svg";

// const BackgroundContext = createContext();

export function PledgeModal() {
  const [isRadioSelected, setIsRadioSelected] = useState(false);

  function handleRadioClick() {
    setIsRadioSelected(false);
  }

  return (
    // <BackgroundContext.Provider value={true}>
    <>
      <Overlay />
      <div className="fixed top-20 left-0 right-0 space-y-5 mx-auto p-6 lg:p-16 bg-white rounded-lg shadow-lg w-10/12 lg:w-2/4 z-100">
        <div className="flex flex-row justify-between w-full">
          <h1 className="h-10 text-lg font-bold">Back this project</h1>
          <Image
            src={crossIcon}
            alt={"Hero Mobile Image"}
            height={10000}
            width={10000}
            className="h-4 w-auto"
          />
        </div>
        <p className="h-20 text-left text-[#7A7A7A]">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="container space-y-5">
          <ModalPledgeBox
            radio={true}
            ticked={isRadioSelected}
            onClick={() => handleRadioClick()}
            title="Pledge with no reward"
            copyText="Choose to support us without a reward if you simply believe in our project. As a backer, 
            you will be signed up to receive product updates via email."
          />
          <ModalPledgeBox
            radio={true}
            ticked={isRadioSelected}
            onClick={() => handleRadioClick()}
            title="Bamboo Stand"
            copyText="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
            you’ll be added to a special Backer member list."
            remainingAmount={101}
          />
          <ModalPledgeBox
            radio={true}
            ticked={isRadioSelected}
            onClick={() => handleRadioClick()}
            title="Black Edition Stand"
            copyText="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
            member list. Shipping is included."
            remainingAmount={64}
          />

          <ModalPledgeBox
            radio={true}
            ticked={isRadioSelected}
            onClick={() => handleRadioClick()}
            title="Mahogany Special Stand"
            copyText="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
            to our Backer member list. Shipping is included."
            remainingAmount={0}
          />
        </div>
      </div>
    </>
    // </BackgroundContext>
  );
}
