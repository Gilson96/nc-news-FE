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
import { useDeleteComment } from "../../hooks/useDeleteActions";

type DeleteCommentsProps = {
  commentId: number | undefined;
  setSuccessDelete: React.Dispatch<SetStateAction<boolean>>;
};

const DeleteComments = ({ commentId }: DeleteCommentsProps) => {
  const { handleDeleteComment } = useDeleteComment(commentId);
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
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer bg-red-600"
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
