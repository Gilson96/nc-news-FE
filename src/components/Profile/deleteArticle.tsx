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
} from "../ui/alert-dialog";
import { useGetTopics } from "../../hooks/useFetchActions";
import { useEffect, useState } from "react";

const DeleteArticle = ({ article_id }: { article_id: number }) => {
  const [successDelete, setSuccessDelete] = useState(false);
  const { topics, isLoading } = useGetTopics();

  const handleDeleteArticle = () => {
    axios
      .delete(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${article_id}`,
      )
      .then((response) => {
        setSuccessDelete(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const emptyTopic = topics?.find((topic) => topic.count === "0")?.slug;
    if (emptyTopic !== undefined) {
      axios
        .delete(
          `https://nc-news-api-99f5fdc34977.herokuapp.com/api/topics/${emptyTopic}`,
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }
  }, [topics]);

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
