'use client'

import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Lenis from 'lenis'
import { useEffect } from "react";

const Screen = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <main className="relative tracking-wider">
      <ScrollProgress />
      <Home />
      <About />
      <Navbar />
    </main>
  );
}

export default Screen;