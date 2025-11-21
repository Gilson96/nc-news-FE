import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { useUpdateArticle } from "../../hooks/usePostActions";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";

const EditArticle = ({ article_id }: { article_id: number }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { errorSubmit, handleSubmit, setSuccessSubmit, successSubmit } =
    useUpdateArticle(article_id);

  return (
    <AlertDialog open={openDialog ? true : false}>
      <AlertDialogTrigger
        onClick={() => setOpenDialog(true)}
        className="cursor-pointer"
      >
        <button className="button-[2%] h-[2rem] w-[4rem] rounded bg-gray-400 text-white">
          Edit
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form
          className="flex w-full flex-col items-start justify-start gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full"
              required
            />
          </div>
          <div className="flex w-full items-center justify-end gap-2">
            <button
              onClick={() => setOpenDialog(false)}
              className="cursor-pointer rounded-full border bg-gray-700 px-[4%] py-[1%] font-medium text-white max-md:relative"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer rounded-full border bg-sky-700 px-[4%] py-[1%] font-medium text-white max-md:relative"
            >
              Submit
            </button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EditArticle;
