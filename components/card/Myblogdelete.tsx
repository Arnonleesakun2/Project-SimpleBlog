import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { deleteBlog } from "@/actions/actionBlog";

const Myblogdelete = ({ id, onDeleteSuccess }: { id: string, onDeleteSuccess: () => void }) => {
  const hdlDelete = async () => {
    const result = await deleteBlog(id);
    if (result.message === "Delete Blog Successfully") {
      onDeleteSuccess();
    }
  };

  return (
    <Button className="cursor-pointer" variant="outline" onClick={hdlDelete}>
      <Trash2 />
    </Button>
  );
};

export default Myblogdelete;
