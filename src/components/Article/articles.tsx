import { useEffect, useState } from "react";
import type { Articles } from "../../utils/dataTypes";
import axios from "axios";
import { dateOnlyFormat } from "../../utils/timeFormat";
import { Loader2 } from "lucide-react";
import type { HomeProps } from "../Home/home";
import { Link } from "react-router";
import InfoButtons from "../ui/infoButtons";

const Article = ({ sort_by, topic, order }: HomeProps) => {
  const [articles, setArticles] = useState<Articles>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles?sort_by=${sort_by}&order=${order}${topic === "all" ? "" : `&topic=${topic}`}`,
      )
      .then(function (response) {
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sort_by, topic, order]);

  return (
    <main className="flex w-full flex-col p-[2%]">
      {isLoading ? (
        <Loader2 className="animate animate-spin" />
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
                    <InfoButtons
                      author={article.author}
                      count={article.count}
                      votes={article.votes}
                    />
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
