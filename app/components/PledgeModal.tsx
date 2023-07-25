import Image from "next/image";

import { PledgeBox } from "./shared/PledgeBox";

import crossIcon from "../../images/icon-close-modal.svg";

export function PledgeModal() {
  return (
    <div className="fixed top-20 left-0 right-0 mx-auto p-6 bg-white rounded-lg shadow-lg w-10/12 lg:w-2/4 z-100 overflow-scroll overscroll-contain  overflow-x-scroll">
      <div className="flex flex-row justify-between w-full">
        <h1 className="h-12 text-lg font-bold">Back this project</h1>
        <Image
          src={crossIcon}
          alt={"Hero Mobile Image"}
          height={10000}
          width={10000}
          className="h-4 w-auto"
        />
      </div>
      <p className="h-18">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="container">
        <PledgeBox
          radio={true}
          title="Pledge with no reward"
          copyText="Choose to support us without a reward if you simply believe in our project. As a backer, 
          you will be signed up to receive product updates via email."
        />
        <PledgeBox
          radio={true}
          title="Bamboo Stand"
          copyText="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list."
          remainingAmount={101}
        />
        <PledgeBox
          radio={true}
          title="Black Edition Stand"
          copyText="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
          member list. Shipping is included."
          remainingAmount={64}
        />
        <PledgeBox
          radio={true}
          title="Mahogany Special Stand"
          copyText="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
          to our Backer member list. Shipping is included."
          remainingAmount={0}
        />
      </div>
    </div>
  );
}
