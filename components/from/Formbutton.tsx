"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RotateCw } from "lucide-react";
type Formdata = {
  text: string;
};
const Formbutton = ({ text }: Formdata) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} variant="outline" type="submit">
      {pending ? (
        <div className="flex items-center gap-2">
          <RotateCw className=" animate-spin" />
          Please wait
        </div>
      ) : (
        <p> {text}</p>
      )}
    </Button>
  );
};

export default Formbutton;
