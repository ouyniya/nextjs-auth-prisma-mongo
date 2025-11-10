import { Iphone } from "@/components/ui/iphone";

const Mock = ({
  src = "https://placehold.co/900x1600/fff/ccc?text=Limeme",
}: {
  src?: string;
}) => {
  return <Iphone src={src} />;
};
export default Mock;
