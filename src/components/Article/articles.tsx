import { Loader2 } from "lucide-react";
import type { HomeProps } from "../Home/home";
import { useGetArticles } from "../../hooks/useFetchActions";
import ArticleCard from "../ui/articleCard";
import InfoButtons from "../ui/infoButtons";

const Article = ({ sort_by, topic, order }: HomeProps) => {
  const { articles, isLoading, setUpdatedArticlesVotes } = useGetArticles(
    sort_by,
    topic,
    order,
  );

  return (
    <main className="flex w-full flex-col bg-white p-[2%] lg:h-full lg:overflow-y-auto lg:px-[8%] lg:py-[1.6%]">
      {isLoading ? (
        <Loader2 className="animate animate-spin" />
      ) : (
        articles?.map((article) => (
          <ArticleCard article={article}>
            <InfoButtons
              author={article.author}
              count={article.count}
              setUpdatedArticlesVotes={setUpdatedArticlesVotes}
              votes={article.votes}
              articleId={article.article_id}
            />
          </ArticleCard>
        ))
      )}
    </main>
  );
};

export default Article;
