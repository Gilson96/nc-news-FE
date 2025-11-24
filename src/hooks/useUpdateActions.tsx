import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const useUpdateArticle = (article_id: number) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleData = Object.fromEntries(formData.entries());
    const sendArticle = {
      title: articleData.title,
      votes: articleData.votes,
    };
    console.log(sendArticle.votes);

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
        toast.error("Something went wrong", {
          style: { backgroundColor: "lightgray" },
        });
      });
  };
  return { handleSubmit };
};
