import HeaderHome from "@/components/HeaderHome";
import Pricing from "@/components/Pricing";
import ShowTemplateHome from "@/components/ShowTemplateHome";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeaderHome />
      <div className="flex flex-col gap-16 justify-center items-center py-32 mx-auto w-full h-full">
        <ShowTemplateHome />
        <Pricing />
      </div>
    </div>
  );
}
