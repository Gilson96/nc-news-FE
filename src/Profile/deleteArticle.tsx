import axios from "axios";
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
} from "../components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { XCircle } from "lucide-react";

const DeleteArticle = ({ article_id }: { article_id: number }) => {
  const handleDeleteArticle = () => {
    axios
      .delete(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${article_id}`,
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer">
        <button className="h-[2rem] w-[4rem] rounded bg-red-500 p-[2%] text-white">
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
