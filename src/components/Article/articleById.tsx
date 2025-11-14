import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import type { ArticleObj } from "../../utils/dataTypes";
import { dateOnlyFormat } from "../../utils/timeFormat";
import { useParams } from "react-router";
import Comments from "../Comments/comments";
import InfoButtons from "../ui/infoButtons";
import Authors from "./authors";
import Four0FourError from "../ErrorHandling/four0FourError";

const ArticleById = () => {
  const [article, setArticle] = useState<ArticleObj>();
  const [updatedArticlesVotes, setUpdatedArticlesVotes] = useState<number>();
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [articleNotFound, setArticleNotFound] = useState(false);

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
      .catch(function (error: AxiosError) {
        if (error.status === 404) {
          setArticleNotFound(true);
        }
      });
  }, [updatedArticlesVotes]);

  if (articleNotFound) {
    return <Four0FourError />;
  } else {
    return (
      <article className="flex w-full flex-col bg-white px-[3%] pt-[4%] lg:h-screen lg:flex-row lg:justify-between lg:gap-32 lg:overflow-hidden lg:p-0">
        <span className="lg:pt-[6%] lg:pl-[3%]">
          <div className="flex items-center gap-1">
            <Authors article_author={article?.article.author} />
            <p
              className={`${isArticleLoading && "animate h-4 w-12 animate-pulse bg-gray-300"}`}
            >
              {isArticleLoading ? "" : article?.article.author}
            </p>
            <span>&#183;</span>
            <p
              className={`${isArticleLoading && "animate h-4 w-12 animate-pulse bg-gray-300"}`}
            >
              {isArticleLoading
                ? ""
                : dateOnlyFormat(article?.article.created_at!)}
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
                className={`h-60 w-full rounded-xl md:h-80 lg:h-80`}
                src={article?.article.article_img_url}
                alt="user avatar"
              />
            )}

            <div className="flex w-full items-center justify-start gap-3 border-b py-[2%] text-sm">
              <InfoButtons
                setUpdatedArticlesVotes={setUpdatedArticlesVotes}
                articleId={
                  article === undefined ? 0 : article?.article.article_id
                }
                author={article === undefined ? "n/a" : article?.article.author}
                count={article === undefined ? 0 : article?.article.count}
                votes={article === undefined ? 0 : article?.article.votes}
              />
            </div>

            <span className="lg:hidden">
              <Comments articleId={Number(articleId.article_id)} />
            </span>
          </div>
        </span>
        <span className="lg:w-[40%] lg:overflow-y-auto lg:border lg:pt-[6%] lg:pr-[2%] lg:pl-[3%]">
          <Comments articleId={Number(articleId.article_id)} />
        </span>
      </article>
    );
  }
};

export default ArticleById;
