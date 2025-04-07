import { Input } from "../ui/input";

type FormInput = {
  name: string;
  type: string;
};
const Forminput = ({ name, type }: FormInput) => {
  return (
    <div>
      <label className="capitalize mb-1" htmlFor={name}>
        {name}
      </label>
      <Input name={name} placeholder={name} type={type} />
    </div>
  );
};

export default Forminput;
