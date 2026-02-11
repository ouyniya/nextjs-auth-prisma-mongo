"use client";

import { cn } from "@/lib/utils";
import { reviews } from "@/utils/constants";
import Link from "next/link";

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({
  name,
  description,
  icon: Icon,
  color,
}: {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
}) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-max cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%] group"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className={cn(
            "flex flex-col gap-5 size-50 items-center justify-start rounded-4xl shadow-sm shadow-slate-50 bg-gradient-to-bl from-white/20 to-rose-500/20"
          )}
          style={{ backgroundColor: color }}
        >
          <div className="h-2"></div>
          <Icon className="size-18 text-white z-10 group-hover:rotate-12 duration-300" />
        </div>
        <div className="absolute bottom-0 rounded-full p-5 bg-white/35 backdrop-blur-md border border-white/40 h-[100px] w-full">
          <div className="flex flex-col">
            <span className="text-lg text-center font-extrabold text-gray-700/65 group-hover:text-rose-900/50 duration-300 group-hover:text-xl">
              {name}
            </span>
            <span className="text-sm text-center opacity-70">
              {description}
            </span>
          </div>
        </div>
      </div>
    </figure>
  );
};

const FeaturePage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* topic */}

      <div className="flex justify-start items-start">
        <p className="text-xl font-bold">Features</p>
      </div>

      <div></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center items-start w-full mx-auto">
        {firstRow.map((review) => (
          <Link href={review.link} key={review.name}>
            <ReviewCard {...review} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FeaturePage;
