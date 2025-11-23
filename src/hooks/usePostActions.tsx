import axios, { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

export const usePostArticle = () => {
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleData = Object.fromEntries(formData.entries());
    const newTopic = articleData.new_topic as string;
    const sendArticle = {
      title: articleData.title,
      topic: newTopic === undefined ? articleData.topic : newTopic,
      author: "guest",
    };

    if (newTopic !== undefined) {
      axios
        .post("https://nc-news-api-99f5fdc34977.herokuapp.com/api/topics", {
          slug: newTopic,
        })
        .then(() => {
          axios
            .post(
              "https://nc-news-api-99f5fdc34977.herokuapp.com/api/users/article",
              sendArticle,
            )
            .then(() => {
              setSuccessSubmit(true);
              toast.success(`Your topic and article were sucessfully added!`, {
                style: { backgroundColor: "lightgreen" },
              });
            })
            .catch((err: AxiosError<{ msg: string }>) => {
              setErrorSubmit(err.response?.data.msg);
            });
        })
        .catch((err: AxiosError<{ msg: string }>) => {
          toast.error(`Somenthing went wrong!`, {
            style: { backgroundColor: "lightcoral" },
          });
          setErrorSubmit(err.response?.data.msg);
        });
    } else {
      axios
        .post(
          "https://nc-news-api-99f5fdc34977.herokuapp.com/api/users/article",
          sendArticle,
        )
        .then(() => {
           setSuccessSubmit(true);
          toast.success(`Your article were sucessfully added!`, {
            style: { backgroundColor: "lightgreen" },
          });
        })
        .catch((err: AxiosError<{ msg: string }>) => {
          toast.error(`Somenthing went wrong!`, {
            style: { backgroundColor: "lightcoral" },
          });
          setErrorSubmit(err.response?.data.msg);
        });
    }
  };

  return {
    handleSubmit,
    successSubmit,
    errorSubmit,
    setSuccessSubmit,
    setErrorSubmit,
  };
};

export const usePostComment = (articleId: number, inputValue: string) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newComment = {
      article_id: articleId,
      body: inputValue,
      votes: 0,
      username: "guest",
    };

    axios
      .post(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${articleId}/comments`,
        newComment,
      )
      .then(() => {
        toast.success(`Your comment was sucessfully added!`, {
          style: { backgroundColor: "lightgreen" },
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(`Somenthing went wrong!`, {
          style: { backgroundColor: "lightcoral" },
        });
      });
  };
  return { handleSubmit };
};
