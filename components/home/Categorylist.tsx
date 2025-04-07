import { catagorys } from "@/utils/catagory";
import Link from "next/link";
import { Button } from "../ui/button";

const Categorylist = ({ category }: { category?: string }) => {
  return (
    <div className="flex justify-center gap-3 py-20">
      {catagorys.map((item, index) => {
        const isActive = item.name === category;
        return (
          <Link href={`/?category=${item.name}`} key={index}>
            <Button variant="outline" className={`flex p-3 ${isActive ? "text-primary" : ''}`}>
              <item.icon />
              <p>{item.name}</p>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Categorylist;
