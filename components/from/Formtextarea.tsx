import { Textarea } from "@/components/ui/textarea";
type fromInput = {
  name: string;
};
const Formtextarea = ({ name }: fromInput) => {
  return (
    <div>
      <label className="capitalize mb-1" htmlFor={name}>
        {name}
      </label>
      <Textarea className="h-40" placeholder={name} name={name} />
    </div>
  );
};

export default Formtextarea;
