import { cn } from "@/lib/utils";
import { AnimatedListDemoSmall } from "./AnimatedListDemoSmall";

const Feature = () => {
  return (
    <div className={cn(`hidden md:block lg:hidden`)}>
      <AnimatedListDemoSmall />
    </div>
  );
};
export default Feature;
