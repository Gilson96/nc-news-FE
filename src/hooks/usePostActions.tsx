import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

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
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          axios
            .post(
              "https://nc-news-api-99f5fdc34977.herokuapp.com/api/users/article",
              sendArticle,
            )
            .then((response) => {
              setSuccessSubmit(true);
              return response.data;
            })
            .catch((err: AxiosError<{ msg: string }>) => {
              setErrorSubmit(err.response?.data.msg);
            });
        })
        .catch((err: AxiosError<{ msg: string }>) => {
          setErrorSubmit(err.response?.data.msg);
        });
    } else {
      axios
        .post(
          "https://nc-news-api-99f5fdc34977.herokuapp.com/api/users/article",
          sendArticle,
        )
        .then((response) => {
          setSuccessSubmit(true);
          return response.data;
        })
        .catch((err: AxiosError<{ msg: string }>) => {
          setErrorSubmit(err.response?.data.msg);
        });
    }
  };

  return { handleSubmit, successSubmit, errorSubmit, setSuccessSubmit };
};

export const useUpdateArticle = (article_id: number) => {
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState<string>();

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
      .then((response) => {
        setSuccessSubmit(true);
        return response.data;
      })
      .catch((err: AxiosError<{ msg: string }>) => {
        setErrorSubmit(err.response?.data.msg);
      });
  };
  return { handleSubmit, successSubmit, errorSubmit, setSuccessSubmit };
};

export const useUpdateComment = (comment_id: number) => {
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState<string>();

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
      .then((response) => {
        setSuccessSubmit(true);
        return response.data;
      })
      .catch((err: AxiosError<{ msg: string }>) => {
        setErrorSubmit(err.response?.data.msg);
      });
  };
  return { handleSubmit, successSubmit, errorSubmit, setSuccessSubmit };
};
