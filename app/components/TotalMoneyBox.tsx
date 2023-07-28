import { DividerLine } from "../components/shared/DividerLine";
import { AmountItem } from "./AmountItem";
import { ProgressBar } from "../components/ProgressBar";

export function TotalMoneyBox() {
  const numberData = [
    { key: "objectOne", amountTotal: "$89,914", outOf: "of $100,00 backed" },
    { key: "objectTwo", amountTotal: "5,007", outOf: "total backers" },
    { key: "objectThree", amountTotal: "56", outOf: "days left" },
  ];

  return (
    <div className="justify-items-center justify-center items-center border-solid border-slate-800 bg-white rounded-lg shadow-lg py-10 lg:py-16 mx-auto w-10/12 text-center lg:w-2/4 max-w-6xl px-6 md:px-12 lg:px-16">
      <div className="container flex flex-col lg:justify-between lg:flex-row pb-10 lg:text-left space-y-6 lg:space-y-0">
        <AmountItem
          key={numberData[0].key}
          total={numberData[0].amountTotal}
          outOf={numberData[0].outOf}
        />
        <DividerLine />
        <AmountItem
          key={numberData[1].key}
          total={numberData[1].amountTotal}
          outOf={numberData[1].outOf}
        />
        <DividerLine />
        <AmountItem
          key={numberData[2].key}
          total={numberData[2].amountTotal}
          outOf={numberData[2].outOf}
        />
      </div>

      <ProgressBar percentage={"4/5"} />
    </div>
  );
}
