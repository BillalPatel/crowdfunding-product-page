import Image from "next/image";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { IntroBox } from "./components/IntroBox";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <IntroBox />

      <div className=""></div>
    </main>
  );
}
