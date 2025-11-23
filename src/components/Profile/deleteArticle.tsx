import { useDeleteArticle } from "../../hooks/useDeleteActions";
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

const DeleteArticle = ({ article_id }: { article_id: number }) => {
  const { handleDeleteArticle } = useDeleteArticle(article_id);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer">
        <button className="h-8 w-16 cursor-pointer rounded bg-red-500 p-[2%] text-white">
          Delete
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want to discard this article?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your article
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer bg-red-600"
            onClick={handleDeleteArticle}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteArticle;
