import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogCard } from "@/utils/types";
import { Button } from "../ui/button";

const Blogcard = ({ item }: { item: blogCard }) => {
  return (
    <article>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <div className="">
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              {new Date(item.createdAt).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </div>
          <div className="">
            <Button>{item.category}</Button>
          </div>
        </CardHeader>
        <CardContent>
          <img
            className="object-cover w-full rounded-2xl"
            src={item.image}
            alt={item.title}
          />
          <p className="mt-2">{item.description}</p>
        </CardContent>
      </Card>
    </article>
  );
};

export default Blogcard;
