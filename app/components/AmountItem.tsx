import React from "react";

export function AmountItem(props: any) {
  const { key, total, outOf } = props;
  return (
    <div key={key} className="flex flex-row lg:justify-start w-full mx-auto lg:w-1/5 justify-center">
      <div>
        <h1 className="font-semibold text-4xl h-14 flex justify-self-center flex-col mx-auto self-center">
          {total}
        </h1>
        <p className="text-sm text-[#7a7a7a] font-light">{outOf}</p>
      </div>
    </div>
  );
}
