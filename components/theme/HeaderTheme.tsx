import { TextAnimate } from "../ui/text-animate";

const HeaderTheme = ({ topic, desc }: { topic: string; desc?: string }) => {
  return (
    <div className="grid grid-cols-1">
      <h2 className="sacramento text-4xl md:text-6xl">
        <TextAnimate animation="blurInUp" by="character" startOnView={true}>
          {topic}
        </TextAnimate>
      </h2>
      <p className="text-sm lg:text-xl opacity-75">{desc}</p>
    </div>
  );
};
export default HeaderTheme;
