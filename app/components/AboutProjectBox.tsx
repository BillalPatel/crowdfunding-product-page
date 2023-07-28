"use client";

import { useState } from "react";

import { PledgeBox } from "./shared/PledgeBox";
import { PledgeModal } from "./PledgeModal";

export function AboutProjectBox() {
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);

  function handleSelectRewardClick() {
    setIsPledgeModalOpen(!isPledgeModalOpen);
  }

  return (
    <div className="flex flex-col justify-items-center justify-center border-solid border-slate-800 bg-white rounded-lg shadow-lg px-6 lg:px-10 py-10 mx-auto w-10/12 text-center my-3 lg:w-2/4 max-w-6xl">
      <div className="container pb-10">
        <h1 className="h-14 font-semibold text-lg text-left">
          About this project
        </h1>
        <div className="text-sm text-[#7a7a7a] font-thin text-left leading-6">
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <br />
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </div>
      <div className="container-pledge-boxes flex max-w-full flex-col space-y-6">
        <PledgeBox
          title="Bamboo Stand"
          pledgeAmount="25"
          copyText="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you’ll be added to a special Backer member list."
          remainingAmount="101"
          inStock={true}
          buttonText="Select Reward"
          onClick={handleSelectRewardClick}
        />
        <PledgeBox
          title="Black Edition Stand"
          pledgeAmount="75"
          copyText="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included."
          remainingAmount="64"
          inStock={true}
          buttonText="Select Reward"
          onClick={handleSelectRewardClick}
        />
        <PledgeBox
          title="Mahogany Special Edition"
          pledgeAmount="200"
          copyText="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included."
          remainingAmount="64"
          inStock={false}
          buttonText="Out of Stock"
        />
      </div>
      {isPledgeModalOpen && <PledgeModal />}
    </div>
  );
}
