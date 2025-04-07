import { fetchBlog, fetchCatBlog } from "@/actions/actionBlog";
import Bloglist from "./Bloglist";
import { blogCard } from "@/utils/types";
import Hero from "../hero/Hero";
import Categorylist from "./Categorylist";
import EmptyList from "./EmptyList";

const Homecontainer = async ({ category }: { category?: string }) => {
  const catBlog: blogCard[] = await fetchCatBlog({ category });
  const Blogs: blogCard[] = await fetchBlog();
  return (
    <section>
      <Hero Blogs={Blogs} />
      <Categorylist category={category} />
      {catBlog.length === 0 ? <EmptyList heading="No result" /> : <Bloglist Blogs={catBlog} />}
    </section>
  );
};

export default Homecontainer;
