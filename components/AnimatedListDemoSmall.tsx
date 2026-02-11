"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { reviews } from "@/utils/constants";

interface Item {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  time: string;
}

let notifications = reviews;

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon: Icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[120px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className="flex size-10 items-center justify-center rounded-2xl "
          style={{ backgroundColor: color }}
        >
          <Icon className="size-5 text-white" />
        </div>
        <span className="text-sm text-center font-bold text-gray-400">
          {name}
        </span>
      </div>
    </figure>
  );
};

export function AnimatedListDemoSmall({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[55vh] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="rounded-2xl from-[#fdfdfb] pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
}
