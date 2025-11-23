import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const useUpdateArticle = (article_id: number) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleData = Object.fromEntries(formData.entries());
    const sendArticle = {
      title: articleData.title,
    };

    axios
      .patch(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${article_id}`,
        sendArticle,
      )
      .then(() => {
        toast.success("Successfully updated", {
          style: { backgroundColor: "lightgreen" },
        });
      })
      .catch((err: AxiosError<{ msg: string }>) => {
        console.log(err);
        toast.success("Something went wrong", {
          style: { backgroundColor: "lightcoral" },
        });
      });
  };
  return { handleSubmit };
};

export const useUpdateComment = (comment_id: number) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleData = Object.fromEntries(formData.entries());
    const sendComment = {
      body: articleData.body,
      votes: articleData.votes,
    };

    axios
      .patch(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/comments/${comment_id}`,
        sendComment,
      )
      .then(() => {
        toast.success("Successfully updated", {
          style: { backgroundColor: "lightgreen" },
        });
      })
      .catch((err: AxiosError<{ msg: string }>) => {
        console.log(err);
        toast.success("Something went wrong", {
          style: { backgroundColor: "lightcoral" },
        });
      });
  };
  return { handleSubmit };
};
