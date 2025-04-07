import React from "react";
import Blogcard from "../card/Blogcard";
import { blogCard } from "@/utils/types";

const Bloglist = ({ Blogs }: { Blogs: blogCard[] }) => {
  return (
    <div className="flex flex-col gap-8">
      {Blogs.map((item, index) => {
        return <Blogcard key={index} item={item} />;
      })}
    </div>
  );
};

export default Bloglist;
