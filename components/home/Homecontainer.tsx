import { fetchBlog } from "@/actions/actionBlog";
import Bloglist from "./Bloglist";
import { blogCard } from "@/utils/types";
import Hero from "../hero/Hero";

const Homecontainer = async () => {
  const Blogs: blogCard[] = await fetchBlog();
  return (
    <section>
      <Hero Blogs={Blogs} />
      <Bloglist Blogs={Blogs} />
    </section>
  );
};

export default Homecontainer;
