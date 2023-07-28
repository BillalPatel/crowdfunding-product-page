import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroBox } from "./components/IntroBox";
import { TotalMoneyBox } from "./components/TotalMoneyBox";
import { AboutProjectBox } from "./components/AboutProjectBox";
import { PledgeModal } from "./components/PledgeModal";
import { ThankYouModal } from "./components/ThankYouModal";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <div className="relative -top-20 space-y-6">
        <IntroBox />
        <TotalMoneyBox />
        <AboutProjectBox />
        {/* <ThankYouModal /> */}
      </div>
      {/* <PledgeModal /> */}
      <div className=""></div>
    </main>
  );
}
