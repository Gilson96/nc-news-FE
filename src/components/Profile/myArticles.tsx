import { ArchiveX, Loader2 } from "lucide-react";
import { useGetArticles } from "../../hooks/useFetchActions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import ArticleCard from "../ui/articleCard";

const MyArticles = () => {
  const { articles, isLoading } = useGetArticles("created_at", "", "DESC");

  return (
    <Accordion className="rounded border px-[3%]" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base cursor-pointer pl-[3%] font-normal">
          My Articles
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden h-full">
          {isLoading ? (
            <p className="flex flex-col items-center justify-center">
              <Loader2 className="animate animate-spin place-self-center" />
              <span>Loading articles</span>
            </p>
          ) : (
            <ul className="overflow-y-auto">
              {articles?.filter((article) => article.author === "guest")
                .length === 0 ? (
                <li className="flex flex-col place-items-center">
                  <ArchiveX size={50} className="text-gray-500" />
                  <p className="text-lg text-gray-500">No article created</p>
                </li>
              ) : (
                articles
                  ?.filter((article) => article.author === "guest")
                  ?.map((article) => <ArticleCard article={article} />)
              )}
            </ul>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MyArticles;
