import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import {
  type Topics,
  type ArticleObj,
  type Articles,
  type CommentsArray,
  type Users,
} from "../utils/dataTypes";

export const useGetArticles = (
  sort_by: string,
  topic: string,
  order: string,
) => {
  const [articles, setArticles] = useState<Articles>();
  const [updatedVotes, setUpdatedVotes] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  sort_by = sort_by?.length < 1 ? "" : `?sort_by=${sort_by}&`;
  order = order?.length < 1 ? "" : `order=${order}`;
  topic = topic === "all" ? "" : topic;

  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles${sort_by}${order}${topic}`,
      )
      .then(function (response) {
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [updatedVotes, sort_by, topic, order, articles]);

  return {
    articles,
    isLoading,
    setUpdatedVotes,
  };
};

export const useGetArticleById = (article_id: number) => {
  const [article, setArticle] = useState<ArticleObj>();
  const [updatedArticlesVotes, setUpdatedArticlesVotes] = useState<number>();
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [articleNotFound, setArticleNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${article_id}`,
      )
      .then(function (response) {
        setArticle(response.data);
        setIsArticleLoading(false);
      })
      .catch(function (error: AxiosError) {
        if (error.status === 404) {
          setArticleNotFound(true);
        }
      });
  }, [updatedArticlesVotes, article]);

  return {
    article,
    setUpdatedArticlesVotes,
    isArticleLoading,
    articleNotFound,
  };
};

export const useGetAuthors = (article_author: string | undefined) => {
  const [user, setUser] = useState<Users>();
  const [isLoading, setIsLoading] = useState(true);

  const findUserImage = user?.find(
    (u) => u.username === article_author,
  )?.avatar_url;

  useEffect(() => {
    axios
      .get(`https://nc-news-api-99f5fdc34977.herokuapp.com/api/users`)
      .then(function (response) {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [user]);

  return { isLoading, findUserImage };
};

export const useGetComments = (articleId: number) => {
  const [comments, setComments] = useState<CommentsArray>();
  const [successDelete, setSuccessDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [updatedVotes, setUpdatedVotes] = useState<number>();

  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${articleId}/comments`,
      )
      .then(function (response) {
        setComments(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [successDelete, comments, updatedVotes]);

  return {
    setSuccessDelete,
    isLoading,
    comments,
    setUpdatedVotes,
  };
};

export const useGetTopics = () => {
  const [topics, setTopics] = useState<Topics>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nc-news-api-99f5fdc34977.herokuapp.com/api/topics")
      .then((response) => {
        setIsLoading(false);
        setTopics(response.data);
        return response;
      })
      .then(() => {})
      .catch((err) => console.log(err));

    const timeoutId = setTimeout(() => {
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
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [topics]);

  return { topics, isLoading };
};
