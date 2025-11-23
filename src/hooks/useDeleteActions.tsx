import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const useDeleteComment = (comment_id: number | undefined) => {
  const handleDeleteComment = () => {
    axios
      .delete(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/comments/${comment_id}`,
      )
      .then(() => {
        toast.success("Your comment was sucessfully deleted", {
          style: { backgroundColor: "lightgreen" },
        });
      })
      .catch((err) => {
        console.log(err);
        toast.success("Your comment was sucessfully deleted", {
          style: { backgroundColor: "lightcoral" },
        });
      });
  };
  return { handleDeleteComment };
};

export const useDeleteArticle = (article_id: number) => {
  const handleDeleteArticle = () => {
    axios
      .delete(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${article_id}`,
      )
      .then(() => {
        toast.success("Your comment was sucessfully deleted", {
          style: { backgroundColor: "lightgreen" },
        });
      })
      .catch((err: AxiosError<{ msg: string }>) => {
        console.log(err);
        toast.success("Your comment was sucessfully deleted", {
          style: { backgroundColor: "lightcoral" },
        });
      });
  };
  return { handleDeleteArticle };
};
