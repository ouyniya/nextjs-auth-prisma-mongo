"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FuzzyOverlayExample = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        // backgroundImage: 'url("/black-noise.png")',
        backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div
      className="relative grid h-screen place-content-center space-y-6 p-8
  bg-[url('/bg.jpg')] 
  bg-cover bg-center"
    >
    {/* <div
      className="relative grid h-screen place-content-center space-y-6 p-8
  bg-[url('https://placehold.co/600x400/fecdd3/ffe4e6?text=Love')] 
  bg-cover bg-center"
    > */}
      <p className="text-center text-6xl font-black">Fuzzy Overlay Example</p>
      <p className="text-center">
        This is a basic example of using a lo-fi fuzzy overlay 📺
      </p>
      <div className="flex items-center justify-center gap-3">
        <button className="text-neutral-20 w-fit px-4 py-2 font-semibold  transition-colors hover:bg-neutral-800">
          Pricing
        </button>
        <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-rose-200">
          Try it free
        </button>
      </div>
    </div>
  );
};

export default FuzzyOverlayExample;
