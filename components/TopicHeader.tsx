import { AuroraText } from "./ui/aurora-text";

const TopicHeader = ({
  decor,
  topic,
  desc,
}: {
  decor: string;
  topic: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-1 pb-16">
      <div className="rounded-full py-1 px-3 text-xs bg-white/50 max-w-max border border-rose-200 text-rose-800/50">
        {decor}
      </div>
      <h1 className="playpen text-3xl lg:text-4xl text-center font-bold text-rose-900/40">
        <AuroraText>{topic}</AuroraText>
      </h1>
      <p className="opacity-75 mt-4">{desc}</p>
    </div>
  );
};
export default TopicHeader;
