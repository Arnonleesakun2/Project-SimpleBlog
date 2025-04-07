"use client";

import { useState, useEffect } from "react";
import { fetchMyBlog } from "@/actions/actionBlog";
import Myblogcard from "@/components/card/Myblogcard";
import { blogCard } from "@/utils/types";

const PageMyBlog = () => {
  const [myBlogs, setMyBlogs] = useState<blogCard[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchBlogs = async () => {
    const result = await fetchMyBlog();
    if (Array.isArray(result)) {
      setMyBlogs(result); 
      setError(null);
    } else {
      setError(result.message);
      setMyBlogs([]);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const handleDeleteSuccess = () => {
    fetchBlogs(); 
  };
  return (
    <main>
      <h2 className="text-xl">MyBlog</h2>
      {error && <div className="text-red-500">{error}</div>}  {/* แสดงข้อผิดพลาด */}
      <section className="flex mt-4 flex-col gap-8">
        {myBlogs.map((item) => (
          <Myblogcard key={item.id} item={item} onDeleteSuccess={handleDeleteSuccess} />
        ))}
      </section>
    </main>
  );
};

export default PageMyBlog;
