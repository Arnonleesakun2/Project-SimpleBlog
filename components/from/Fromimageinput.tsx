import { Input } from "../ui/input";

const Fromimageinput = () => {
  return (
    <div>
      <label className="capitalize mb-1" htmlFor="image">
        image
      </label>
      <Input id="image" name="image" type="file" accept="image/*" required />
    </div>
  );
};

export default Fromimageinput;
