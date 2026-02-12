import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Themes = ({ themeArray }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-[90%] lg:w-full md:max-w-4xl"
    >
      <CarouselContent>
        {themeArray.map((theme, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col gap-2 aspect-square">
                  <Image
                    src={theme.image}
                    width={500}
                    height={500}
                    alt={theme.name}
                    className="rounded-lg"
                  />
                  <div className="flex gap-2 items-center justify-start">
                    <p className="text-base xl:text-lg font-semibold">{theme.name}</p>
                    <Link href={theme.link}>
                      <div className="flex gap-1 items-center bg-gray-50 border border-gray-100 rounded-md px-2 py-1 hover:cursor-pointer group">
                        <p className="text-xs opacity-75">ดูตัวอย่าง</p>
                        <ChevronRight className="size-3 group-hover:translate-x-0.5 duration-300" />
                      </div>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-start items-start text-xs md:text-sm">
                    <p>{theme.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
