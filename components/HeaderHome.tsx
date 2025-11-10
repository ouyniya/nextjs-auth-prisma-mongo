"use client";

import { PixelImage } from "@/components/ui/pixel-image";
import MockHome from "./Mock-home";
import Feature from "./Feature";
import { Button } from "./ui/button";
import Link from "next/link";
import MarqueeHeader from "./MarqueeHeader";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const HeaderHome = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  let screenY = "lg:justify-start";
  const constY = 1100;
  if (height > constY) {
    screenY = "lg:justify-center";
  }

  return (
    <div className="relative">
      {/* features */}
      <div>
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 z-50 md:w-lg lg:w-screen max-w-4xl min-w-xs inset-0 ">
          <div className="flex justify-center lg:gap-8 lg:px-0">
            <div className="w-full max-w-[80%] mx-auto md:max-w-xs lg:basis-1/2">
              <MockHome />
            </div>
            <Feature />

            <div
              className={cn(
                "hidden text-left basis-1/2 lg:flex lg:flex-col pt-8",
                screenY
              )}
            >
              {/* <HeaderText /> */}
              <Image
                src="/logo-header.png"
                width={320}
                height={0}
                alt="header logo"
                className="mb-5 opacity-70"
              />
              <h1 className="text-3xl xl:text-4xl playpen text-rose-300 font-bold">
                การ์ดแต่งงานออนไลน์
              </h1>
              <div className="mt-2 text-lg font-bold text-gray-500">
                <p>
                  {" "}
                  <span>สร้างการ์ดสวยๆ สำหรับวันสำคัญที่สุดของคุณ</span>
                </p>
              </div>

              <div className="mt-5">
                <h1 className="font-semibold opacity-40">
                  ตัวอย่างสิ่งที่คุณจะได้รับ
                </h1>
                {/* marquee */}
                <MarqueeHeader />
              </div>

              <div>
                <Button className="bg-rose-200/75 shadow-sm shadow-rose-600/25 hover:bg-rose-100 hover:cursor-pointer duration-300 font-bold text-lg rounded-xl py-6 px-8 mt-12 text-rose-800/50 hover:text-rose-800/40">
                  <Link href="/wedding-card">ดูตัวอย่างการ์ด</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <PixelImage src="/bg-2.jpg" grayscaleAnimation={false} />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-[10vh] bg-gradient-to-t from-white/100 to-transparent" />
    </div>
  );
};
export default HeaderHome;
