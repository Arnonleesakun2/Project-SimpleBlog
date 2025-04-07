import Link from "next/link";
import { Button } from "../ui/button";

const EmptyList = ({
  heading = "No item",
  message = "Please try again",
  btnText = "back home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <section className="flex justify-center">
      <div className="py-50">
        <h2 className="text-2xl">{heading}</h2>
        <p className="text-xl">{message}</p>

        <Button asChild className="mt-8">
          <Link href="/">{btnText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default EmptyList;
