import axios from "axios";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { XCircle } from "lucide-react";
import type { SetStateAction } from "react";

type DeleteCommentsProps = {
  commentId: number;
  setSuccessDelete: React.Dispatch<SetStateAction<boolean>>;
};

const DeleteComments = ({
  commentId,
  setSuccessDelete,
}: DeleteCommentsProps) => {
  console.log(commentId);
  const handleDeleteComment = () => {
    axios
      .delete(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/comments/${commentId}`,
      )
      .then(() => {
        toast("Your comment was sucessfully deleted", {});
        setSuccessDelete(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer">
        <XCircle />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want to discard this comment?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your comment
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 cursor-pointer"
            onClick={handleDeleteComment}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteComments;
