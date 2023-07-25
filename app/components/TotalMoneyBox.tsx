import { DividerLine } from "../components/shared/DividerLine";

export function TotalMoneyBox() {
  return (
    <div className="justify-items-center justify-center border-solid border-slate-800 bg-white rounded-lg shadow-lg px-4 py-10 mx-auto w-10/12 text-center my-3 lg:w-2/4">
      <div className="container flex flex-col lg:flex-row pb-10">
        <h1 className="font-semibold px-10 text-4xl">
          $89,914
          <br />
          <span className="text-sm text-[#7a7a7a] font-light">
            of $100,000 backed
          </span>
        </h1>
        <DividerLine />
        {/* <h1 className="font-semibold px-10 text-4xl"> */}
        <h1 className="font-semibold text-4xl">
          5,007
          <br />
          <span className="text-sm text-[#7a7a7a] font-light">
            total backers
          </span>
        </h1>
        {/* <div className="border-t w-20 mx-auto my-5 md:hidden lg:hidden"></div>
        <div className="border-l w-20 mx-auto my-5 hidden md:flex lg:flex"></div> */}
        <div className="border-l h-16 mx-auto"></div>
        <h1 className="font-semibold px-10 text-4xl">
          56
          <br />
          <span className="text-sm text-[#7a7a7a] font-light">days left</span>
        </h1>
      </div>
      <div className="progress-bar rounded-full h-3 w-full bg-[#fafafa] px-10">
        <div className="bg-[#3cb4ac] rounded-full h-full w-4/5"></div>
      </div>
    </div>
  );
}
