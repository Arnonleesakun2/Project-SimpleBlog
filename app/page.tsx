import Homecontainer from "@/components/home/Homecontainer";

const page = async ({
  searchParams,
}: {
  searchParams: { category?: string };
}) => {
  const { category } = await searchParams;
  return (
    <main>
      <Homecontainer category={category} />
    </main>
  );
};

export default page;
