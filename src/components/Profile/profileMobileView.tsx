import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ArchiveX, Loader2, UserCircle2, XCircle } from "lucide-react";
import { useGetArticles } from "../../hooks/useFetchActions";
import ArticleCard from "../ui/articleCard";
import DeleteArticle from "./deleteArticle";
import EditArticle from "./editArticle";

const ProfileMobileView = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const screenSize = useScreenSize();
  const { articles, isLoading, setUpdatedArticlesVotes } = useGetArticles(
    "",
    "",
    "",
  );

  return (
    screenSize.width < 1024 && (
      <Dialog open={openDialog ? true : false}>
        <DialogTrigger
          onClick={() => setOpenDialog(true)}
          className="flex w-full cursor-pointer items-center gap-1 rounded py-[5%] pl-[5%] hover:bg-gray-100"
        >
          <UserCircle2 color="black" size={16} />
          <span className="text-sm">See profile</span>
        </DialogTrigger>
        <DialogContent className="h-[80%] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex w-full items-center justify-between border-b pb-2 text-left">
              <p>Profile</p>
              <XCircle onClick={() => setOpenDialog(false)} />
            </DialogTitle>
          </DialogHeader>
          {isLoading ? (
            <p className="flex h-full w-full flex-col items-center justify-center">
              <span>
                <Loader2 className="animate animate-spin" />
              </span>
              <span>Loading articles</span>
            </p>
          ) : (
            <ul className="overflow-y-auto">
              {articles?.filter((article) => article.author === "guest")
                .length === 0 && (
                <li className="flex flex-col place-items-center">
                  <ArchiveX size={50} className="text-gray-500" />
                  <p className="text-lg text-gray-500">No article created</p>
                </li>
              )}
              {articles
                ?.filter((article) => article.author === "guest")
                .map((article) => (
                  <ArticleCard article={article}>
                    <div className="flex items-center gap-2">
                      <EditArticle article_id={article.article_id} />
                      <DeleteArticle article_id={article.article_id} />
                    </div>
                  </ArticleCard>
                ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    )
  );
};

export default ProfileMobileView;
