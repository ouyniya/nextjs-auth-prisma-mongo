import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { THEME_RECOMMENDATIONS } from "@/utils/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Themes } from "@/components/Themes";

const WeddingCardPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl playpen text-rose-800/50 font-semibold">
          ธีมการ์ดออนไลน์
        </h1>
      </div>

      <div className="grid gap-18">
        {/* Recommend */}
        <div className="grid gap-5">
          <h2 className="text-xl playpen font-semibold">Theme แนะนำ</h2>

          <Themes themeArray={THEME_RECOMMENDATIONS} />
        </div>

        {/* basic */}
        <div className="grid gap-8">
          <h2 className="text-xl playpen font-semibold">Basic Theme</h2>
          <Themes themeArray={THEME_RECOMMENDATIONS} />
        </div>

        {/* Standard */}
        <div className="grid gap-8">
          <h2 className="text-xl playpen font-semibold">Standard Theme</h2>
          <Themes themeArray={THEME_RECOMMENDATIONS} />
        </div>

        {/* Premium */}
        <div className="grid gap-8">
          <h2 className="text-xl playpen font-semibold">Premium Theme</h2>
          <Themes themeArray={THEME_RECOMMENDATIONS} />
        </div>
      </div>
    </div>
  );
};
export default WeddingCardPage;
