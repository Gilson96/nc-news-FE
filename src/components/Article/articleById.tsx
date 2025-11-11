import axios from "axios";
import { useState, useEffect } from "react";
import type { ArticleObj, Users } from "../../utils/dataTypes";
import { dateOnlyFormat } from "../../utils/timeFormat";
import { useParams } from "react-router";
import Comments from "./comments";
import InfoButtons from "../ui/infoButtons";

const ArticleById = () => {
  const [article, setArticle] = useState<ArticleObj>();
  const [user, setUser] = useState<Users>();
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const articleId = useParams();

  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${Number(articleId.article_id)}`,
      )
      .then(function (response) {
        setArticle(response.data);
        setIsArticleLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`https://nc-news-api-99f5fdc34977.herokuapp.com/api/users`)
      .then(function (response) {
        setUser(response.data);
        setIsUserLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const findUserImage = user?.find(
    (u) => u.username === article?.article.author,
  )?.avatar_url;

  return (
    <article className="flex w-full flex-col px-[3%] pt-[4%]">
      <div className="flex items-center gap-1">
        {isUserLoading ? (
          <span
            className={`animate h-8 w-8 animate-pulse rounded-full bg-gray-300`}
          ></span>
        ) : (
          <img
            className={`h-8 w-8 rounded-full`}
            src={findUserImage}
            alt="user avatar"
          />
        )}
        <p
          className={`${isArticleLoading && "animate h-4 w-12 animate-pulse bg-gray-300"}`}
        >
          {isArticleLoading ? "" : article?.article.author}
        </p>
        <span>&#183;</span>
        <p
          className={`${isArticleLoading && "animate h-4 w-12 animate-pulse bg-gray-300"}`}
        >
          {isArticleLoading ? "" : dateOnlyFormat(article?.article.created_at!)}
        </p>
      </div>

      <div className="flex flex-col gap-2 pt-[3%]">
        <p
          className={`${isArticleLoading ? "animate h-4 w-20 animate-pulse bg-gray-300" : "font-bold"}`}
        >
          {isArticleLoading ? "" : article?.article.title}
        </p>
        {isArticleLoading ? (
          <span
            className={`animate h-40 w-52 animate-pulse rounded-xl bg-gray-300`}
          ></span>
        ) : (
          <img
            className={`h-[60] w-full rounded-xl`}
            src={article?.article.article_img_url}
            alt="user avatar"
          />
        )}

        <div className="flex w-full items-center justify-start gap-3 border-b py-[2%] text-sm">
          <InfoButtons
            author={article === undefined ? "n/a" : article?.article.author}
            count={article === undefined ? 0 : article?.article.count}
            votes={article === undefined ? 0 : article?.article.votes}
          />
        </div>

        <Comments articleId={Number(articleId.article_id)} />
      </div>
    </article>
  );
};

export default ArticleById;
