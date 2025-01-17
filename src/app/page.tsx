'use client';

import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const Screen = () => {
  return (
    <main className="relative">
      <ScrollProgress />
      <Home />
      <About />
      <Navbar />
    </main>
  );
}

export default Screen;