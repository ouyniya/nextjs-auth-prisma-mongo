"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import TopicHeader from "./TopicHeader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import Image from "next/image";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

const ShowTemplateHome = () => {
  return (
    <div className="flex flex-col gap-4 max-w-5xl">
      <TopicHeader
        decor="Sample"
        topic="Templates"
        desc="ตัวอย่างรูปแบบการ์ด"
      />
      <section id="photos">
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, index) => (
            <BlurFade key={imageUrl} delay={0.25 + index * 0.05} inView>
              <ImageZoom>
                <Image
                  alt="Placeholder image"
                  className="mb-4 size-full rounded-lg object-contain"
                  height={0}
                  src={imageUrl}
                  unoptimized
                  width={0}
                />
              </ImageZoom>
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
};
export default ShowTemplateHome;
