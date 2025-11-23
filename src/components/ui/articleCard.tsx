import { type ReactNode } from "react";
import type { Article } from "../../utils/dataTypes";
import { Link } from "react-router";
import { dateOnlyFormat } from "../../utils/timeFormat";
import { Image } from "lucide-react";

const ArticleCard = ({
  article,
  children,
  imageSize,
}: {
  article: Article;
  children?: ReactNode;
  imageSize?: string;
}) => {
  return (
    <article className="flex w-full flex-col border-b p-[2%] lg:p-0">
      <div className="flex w-full items-start justify-between lg:flex-col lg:items-center lg:justify-center">
        <Link
          to={`/article/${article?.article_id}`}
          className="max-lg:hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:pb-2"
        >
          <h1 className="w-[80%] text-lg font-medium lg:w-[80%] lg:py-[3%] lg:text-base">
            {article?.title}
          </h1>
          <p className="text-sm">{dateOnlyFormat(article.created_at)}</p>
        </Link>
        <Link
          to={`/article/${article.article_id}`}
          className="max-xs:hidden w-[30%] lg:w-full"
        >
          {article.article_img_url === null ? (
            <div className="flex h-24 w-24 items-center justify-center rounded bg-gray-300 lg:h-60 lg:w-100">
              <Image className="text-gray-500 lg:size-30" />
            </div>
          ) : (
            <img
              className={`${imageSize?.length! > 0 ? imageSize : "lg:h-60 lg:w-100"} h-24 w-24 rounded lg:place-self-center`}
              src={article.article_img_url}
            />
          )}
        </Link>
        <div className="flex w-full flex-col items-end gap-2 text-right">
          <Link
            to={`/article/${article.article_id}`}
            className="max-xs:w-full w-[80%] text-sm lg:hidden"
          >
            {article.title}
          </Link>
          <Link
            to={`/article/${article.article_id}`}
            className="text-sm lg:hidden"
          >
            {dateOnlyFormat(article.created_at)}
          </Link>
          <div className="flex w-full items-center justify-end gap-3 text-sm lg:justify-start lg:py-[4%]">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
