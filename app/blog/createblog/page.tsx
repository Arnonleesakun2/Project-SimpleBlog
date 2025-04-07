"use client";
import { createBlog } from "@/actions/actionBlog";
import Formbutton from "@/components/from/Formbutton";
import Forminput from "@/components/from/Forminput";
import Formtextarea from "@/components/from/Formtextarea";
import Fromcontainer from "@/components/from/Fromcontainer";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { catagorys } from "../../../utils/catagory";
import Fromimageinput from "@/components/from/Fromimageinput";

const Createblog = () => {
  const [selected, setSelected] = useState("");
  return (
    <main>
      <h1 className="text-xl">Createblog</h1>
      <section className="mt-4">
        <Fromcontainer action={createBlog}>
          <div className="flex flex-col gap-3">
            <div className="grid md:grid-cols-2 gap-3">
              <Forminput name="title" type="text" />
              <div>
                <label className="  mb-1 ">Category</label>
                <Select onValueChange={setSelected}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {catagorys.map((cat, index) => (
                      <SelectItem key={index} value={cat.name}>
                        <div className="flex items-center gap-2">
                          <cat.icon size={16} />
                          {cat.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input type="hidden" name="category" value={selected} />
              </div>
            </div>
            <Fromimageinput/>
            <Formtextarea name="description" />
            <div className="flex justify-center">
              <Formbutton text="Create Blog" />
            </div>
          </div>
        </Fromcontainer>
      </section>
    </main>
  );
};

export default Createblog;
