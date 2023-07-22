import Image from "next/image";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Box } from "./components/Box";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Box />

      <div className=""></div>
    </main>
  );
}
