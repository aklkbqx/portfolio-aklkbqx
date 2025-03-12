'use client'

import Home from "@/components/Home";
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
    </main>
  );
}

export default Screen;