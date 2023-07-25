import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroBox } from "./components/IntroBox";
import { TotalMoneyBox } from "./components/TotalMoneyBox";
import { AboutProjectBox } from "./components/AboutProjectBox";
import { PledgeModal } from "./components/PledgeModal";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <IntroBox />
      <TotalMoneyBox />
      <AboutProjectBox />
      <PledgeModal />
      <div className=""></div>
    </main>
  );
}
