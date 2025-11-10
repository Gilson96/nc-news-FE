import { useEffect, useState } from "react";
import type { Articles } from "../../utils/dataTypes";
import axios from "axios";
import { dateOnlyFormat } from "../../utils/timeFormat";
import { ArrowBigUpDash, User2 } from "lucide-react";

const Article = () => {
  const [articles, setArticles] = useState<Articles>();
  const [isLoading, setIsLoading] = useState(true);

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
        <p>Loading</p>
      ) : (
        articles?.map((article) => (
          <article className="flex w-full flex-col border-b p-[2%]">
            <div className="flex w-full items-start justify-between">
              <div className="w-[30%]">
                <img
                  className="h-[5rem] w-[5rem] rounded"
                  src={article.article_img_url}
                />
              </div>
              <div className="flex w-full flex-col items-end text-right">
                <h1 className="text-sm">{article.title}</h1>
                <p className="text-sm">{dateOnlyFormat(article.created_at)}</p>
                <div className="flex w-full items-center justify-end gap-3 text-sm">
                  <p className="flex w-auto items-center justify-center rounded-full border p-[2%]">
                    <span>
                      <User2 size={15} />
                    </span>
                    <span>| {article.author}</span>
                  </p>
                  <p className="flex items-center justify-center rounded-full border px-[4%] py-[2%]">
                    <span>
                      <ArrowBigUpDash size={15} />
                    </span>
                    <span>| {article.votes}</span>
                  </p>
                  <p className="flex items-center justify-center rounded-full border p-[2%]">
                    <span>
                      <User2 size={15} />
                    </span>
                    <span>| {article.count}</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))
      )}
    </main>
  );
};

export default Article;
