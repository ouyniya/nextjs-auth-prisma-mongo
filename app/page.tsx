import HeaderHome from "@/components/HeaderHome";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeaderHome />
      <div className="flex flex-col">
        <div className="h-[50vh] w-full bg-white">test</div>
        <Pricing />
        <Pricing />
      </div>
    </div>
  );
}
