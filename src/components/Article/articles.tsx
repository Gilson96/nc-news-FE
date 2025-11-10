import { useEffect, useState } from "react";
import type { Articles } from "../../utils/dataTypes";
import axios from "axios";
import { dateOnlyFormat } from "../../utils/timeFormat";
import { ArrowBigUpDash, MessageCircle, User2 } from "lucide-react";
import type { HomeProps } from "../Home/home";
import { Link } from "react-router";

const Article = ({ created_at, topic, comments }: HomeProps) => {
  const [articles, setArticles] = useState<Articles>();
  const [isLoading, setIsLoading] = useState(true);

  console.log(created_at);
  console.log(topic);
  console.log(comments);

  useEffect(() => {
    axios
      .get("https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles")
      .then(function (response) {
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main className="flex w-full flex-col p-[2%]">
      {isLoading ? (
        <article className="flex w-full flex-col border-b p-[2%]">
          <div className="flex w-full items-start justify-between">
            <div className="w-[30%]">
              <div className="animate h-24 w-24 animate-pulse rounded bg-gray-300"></div>
            </div>
            <div className="flex w-full flex-col items-end gap-2 text-right">
              <h1 className="animate animate-pulse bg-gray-300 text-sm text-gray-300">
                title
              </h1>
              <p className="animate animate-pulse bg-gray-300 text-sm text-gray-300">
                date
              </p>
              <div className="flex w-full items-center justify-end gap-3 text-sm">
                <p className="flex w-auto items-center justify-center gap-1 rounded-full border p-[2%]">
                  <span>
                    <User2 size={15} />
                  </span>
                  <span className="animate animate-pulse bg-gray-300 text-sm text-gray-300">
                    | author
                  </span>
                </p>
                <p className="flex items-center justify-center gap-1 rounded-full border px-[4%] py-[2%]">
                  <span>
                    <ArrowBigUpDash size={15} />
                  </span>
                  <span className="animate animate-pulse bg-gray-300 text-sm text-gray-300">
                    | votes
                  </span>
                </p>
                <p className="flex items-center justify-center gap-1 rounded-full border p-[2%]">
                  <span>
                    <MessageCircle size={15} />
                  </span>
                  <span className="animate animate-pulse bg-gray-300 text-sm text-gray-300">
                    | count
                  </span>
                </p>
              </div>
            </div>
          </div>
        </article>
      ) : (
        articles?.map((article) => (
          <article className="flex w-full flex-col border-b p-[2%]">
            <Link to={`/article/${article.article_id}`}>
              <div className="flex w-full items-start justify-between">
                <div className="w-[30%]">
                  <img
                    className="h-24 w-24 rounded"
                    src={article.article_img_url}
                  />
                </div>
                <div className="flex w-full flex-col items-end gap-2 text-right">
                  <h1 className="text-sm">{article.title}</h1>
                  <p className="text-sm">
                    {dateOnlyFormat(article.created_at)}
                  </p>
                  <div className="flex w-full items-center justify-end gap-3 text-sm">
                    <p className="flex w-auto items-center justify-center gap-1 rounded-full border p-[2%]">
                      <span>
                        <User2 size={15} />
                      </span>
                      <span>| {article.author}</span>
                    </p>
                    <p className="flex items-center justify-center gap-1 rounded-full border px-[4%] py-[2%]">
                      <span>
                        <ArrowBigUpDash size={15} />
                      </span>
                      <span>| {article.votes}</span>
                    </p>
                    <p className="flex items-center justify-center gap-1 rounded-full border p-[2%]">
                      <span>
                        <MessageCircle size={15} />
                      </span>
                      <span>| {article.count}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))
      )}
    </main>
  );
};

export default Article;
