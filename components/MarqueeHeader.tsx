"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { reviews } from "@/utils/constants";

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  name,
  description,
  icon: Icon,
  color,
  time,
}: {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  time: string;
}) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-max cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-2xl bg-rose-200"
          )}
          style={{ backgroundColor: color }}
        >
          <Icon className="size-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-center font-bold text-gray-800/55">
            {name}
          </span>
          <span className="text-sm opacity-60">{description}</span>
        </div>
      </div>
    </figure>
  );
};

const MarqueeHeader = () => {
  return (
    <div className="relative flex w-[450px] flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="from-[#fdfdfb] pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-[#fdfdfb] pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
};
export default MarqueeHeader;
