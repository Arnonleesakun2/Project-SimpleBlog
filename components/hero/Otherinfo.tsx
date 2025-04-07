import { blogCard } from "@/utils/types";

const Otherinfo = ({ item }: { item: blogCard }) => {
  return (
    <div>
      <p className="text-2xl">{item.title}</p>
      <p>{item.description.substring(0, 100)}</p>
    </div>
  );
};

export default Otherinfo;
