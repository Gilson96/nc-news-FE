import { Link, useLocation } from "react-router";
import { Loader2 } from "lucide-react";
import { dateOnlyFormat } from "../../utils/timeFormat";
import InfoButtons from "../ui/infoButtons";
import Four0FourError from "../ErrorHandling/four0FourError";
import { useGetArticles } from "../../hooks/useFetchActions";

const Topic = () => {
  const { search } = useLocation();
  const topic = search;
  const { articles, isLoading, setUpdatedArticlesVotes } = useGetArticles(
    "",
    topic,
    "",
  );
  const allowedSearch = ["?topic=coding", "?topic=cooking", "?topic=football"];

  if (!allowedSearch.includes(search)) {
    return <Four0FourError />;
  }

  return (
    <section className="flex h-full w-full items-center justify-center gap-2 bg-white">
      {isLoading ? (
        <Loader2 className="animate animate-spin" />
      ) : (
        <div className="w-full">
          <div className="flex w-full flex-col px-[3%]">
            <h1 className="border-b pt-5 pb-4 text-2xl font-medium capitalize lg:pt-16">
              {search.slice(7)}
            </h1>
            <div className="lg:flex lg:flex-wrap lg:items-center">
              {articles?.map((article) => (
                <article className="flex w-full flex-col border-b py-[2%] lg:w-[50%]">
                  <div className="lg flex w-full items-start justify-between lg:w-full lg:flex-col lg:items-center lg:justify-center">
                    <Link
                      to={`/article/${article.article_id}`}
                      className="max-lg:hidden lg:flex lg:w-full lg:items-center lg:justify-between lg:pb-2"
                    >
                      <h1 className="w-[80%] truncate text-lg font-medium lg:w-[60%] lg:text-base">
                        {article.title}
                      </h1>
                      <p className="pr-[10%]">
                        {dateOnlyFormat(article.created_at)}
                      </p>
                    </Link>
                    <Link
                      to={`/article/${article.article_id}`}
                      className="w-[30%] lg:w-full"
                    >
                      <img
                        className="h-24 w-24 rounded lg:h-52 lg:w-[20rem]"
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
