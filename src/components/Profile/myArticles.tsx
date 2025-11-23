import { ArchiveX, Loader2 } from "lucide-react";
import { useGetArticles } from "../../hooks/useFetchActions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import EditArticle from "./editArticle";
import DeleteArticle from "./deleteArticle";
import { dateOnlyFormat } from "../../utils/timeFormat";

const MyArticles = () => {
  const { articles, isLoading } = useGetArticles("created_at", "", "DESC");

  return (
    <Accordion className="rounded border px-[3%]" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer border-b pl-[3%] text-base font-normal">
          My Articles
        </AccordionTrigger>
        <AccordionContent className="h-72">
          {isLoading ? (
            <p className="flex flex-col items-center justify-center">
              <Loader2 className="animate animate-spin place-self-center" />
              <span>Loading articles</span>
            </p>
          ) : (
            <ul className="h-full overflow-y-auto">
              {articles?.filter((article) => article.author === "guest")
                .length === 0 ? (
                <li className="flex h-full flex-col place-items-center">
                  <ArchiveX size={50} className="text-gray-500" />
                  <p className="text-lg text-gray-500">No article created</p>
                </li>
              ) : (
                articles
                  ?.filter((article) => article.author === "guest")
                  ?.map((article) => (
                    <article className="border-b p-[2%]">
                      <p className="flex justify-between py-[4%]">
                        <span className="font-medium">{article.title}</span>
                        <span className="font-medium">
                          {dateOnlyFormat(article.created_at)}
                        </span>
                      </p>
                      <div className="flex items-center justify-end gap-2 py-[2%]">
                        <EditArticle article_id={article.article_id} />
                        <DeleteArticle article_id={article.article_id} />
                      </div>
                    </article>
                  ))
              )}
            </ul>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MyArticles;
