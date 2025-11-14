import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type {
  ArticleFilters,
  ArticleObj,
  Articles,
  CommentsArray,
  Users,
} from "../utils/dataTypes";

export const useGetArticles = (
  sort_by: string,
  topic: string,
  order: string,
) => {
  const [articles, setArticles] = useState<Articles>();
  const [updatedArticlesVotes, setUpdatedArticlesVotes] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);

  console.log(`https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles?${sort_by === "" ? "" : `sort_by=${sort_by}&`}${order === "" ? "" : `order=${order}`}${topic === "all" ? "" : topic}`)
  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles?${sort_by === "" ? "" : `sort_by=${sort_by}&`}${order === "" ? "" : `order=${order}`}${topic === "all" ? "" : topic}`,
      )
      .then(function (response) {
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [updatedArticlesVotes, sort_by, topic, order]);

  return { articles, isLoading, setUpdatedArticlesVotes };
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
  }, [updatedArticlesVotes]);

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

  console.log(article_author);
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
  }, []);

  return { isLoading, findUserImage };
};

export const useGetComments = (articleId: number) => {
  const [comments, setComments] = useState<CommentsArray>();
  const [commentId, setCommentId] = useState<number>();
  const [successDelete, setSuccessDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
  }, [successDelete]);

  return {
    commentId,
    setCommentId,
    setSuccessDelete,
    isLoading,
    comments,
  };
};
