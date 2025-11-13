import axios from "axios";
import { useState, useEffect } from "react";
import type { Articles } from "../../utils/dataTypes";
import { Link, useLocation } from "react-router";
import { Loader2 } from "lucide-react";
import { dateOnlyFormat } from "../../utils/timeFormat";
import InfoButtons from "../ui/infoButtons";
import Four0FourError from "../ErrorHandling/four0FourError";

interface LocationState {
  search: "?topic=coding" | "?topic=cooking" | "?topic=football";
}
const Topic = () => {
  const [articleTopics, setArticleTopics] = useState<Articles>();
  const [isLoading, setIsLoading] = useState(true);
  const [updatedArticlesVotes, setUpdatedArticlesVotes] = useState<number>();
  const { search } = useLocation() as LocationState;

  const allowedSearch = ["?topic=coding", "?topic=cooking", "?topic=football"];

  if (!allowedSearch.includes(search)) {
    return <Four0FourError />;
  }
  
  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles${search}`,
      )
      .then(function (response) {
        setArticleTopics(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [updatedArticlesVotes]);

  return (
    <section className="flex h-full w-full items-center justify-center gap-2">
      {isLoading ? (
        <Loader2 className="animate animate-spin" />
      ) : (
        <div className="w-full">
          <div className="h-20 w-full bg-linear-to-r from-cyan-500 to-blue-500">
            <span></span>
          </div>
          <div className="flex w-full flex-col p-[2%]">
            <h1 className="border-b pt-5 pb-4 text-2xl font-medium capitalize">
              {search.slice(7)}
            </h1>
            <div>
              {articleTopics?.map((article) => (
                <article className="flex w-full flex-col border-b py-[2%]">
                  <div className="flex w-full items-start justify-between lg:flex-col lg:items-center lg:justify-center">
                    <Link
                      to={`/article/${article.article_id}`}
                      className="max-lg:hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:pb-2"
                    >
                      <h1 className="w-[80%] text-lg font-medium">
                        {article.title}
                      </h1>
                      <p className="">{dateOnlyFormat(article.created_at)}</p>
                    </Link>
                    <Link
                      to={`/article/${article.article_id}`}
                      className="w-[30%] lg:w-full"
                    >
                      <img
                        className="h-24 w-24 rounded lg:h-full lg:w-full"
                        src={article.article_img_url}
                      />
                    </Link>
                    <div className="flex w-full flex-col items-end gap-2 text-right">
                      <Link
                        to={`/article/${article.article_id}`}
                        className="text-sm lg:hidden"
                      >
                        {article.title}
                      </Link>
                      <Link
                        to={`/article/${article.article_id}`}
                        className="text-sm lg:hidden"
                      >
                        {dateOnlyFormat(article.created_at)}
                      </Link>
                      <div className="flex w-full items-center justify-end gap-3 text-sm lg:justify-start lg:py-[2%]">
                        <InfoButtons
                          articleId={article.article_id}
                          setUpdatedArticlesVotes={setUpdatedArticlesVotes}
                          author={article.author}
                          count={article.count}
                          votes={article.votes}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Topic;
