import Homecontainer from "@/components/home/Homecontainer";
import { Suspense } from "react";

const page = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <Homecontainer/>
      </main>
    </Suspense>
  );
};

export default page;
