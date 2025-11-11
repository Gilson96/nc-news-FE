import axios from "axios";
import { useEffect, useState } from "react";
import type { CommentsArray } from "../../utils/dataTypes";
import { Loader2 } from "lucide-react";
import { dateOnlyFormat } from "../../utils/timeFormat";

type CommentsProps = {
  articleId: number;
};

const Comments = ({ articleId }: CommentsProps) => {
  const [comments, setComments] = useState<CommentsArray>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${articleId}/comments`,
      )
      .then(function (response) {
        setComments(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="flex flex-col gap-3">
      <h1 className="font-bold">Comments</h1>
      {isLoading ? (
        <Loader2 className="animate animate-spin" />
      ) : (
        comments?.map((comment) => (
          <ul className="border-b py-[2%] text-sm">
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="font-medium">{comment.author}</p>
                <span>&#183;</span>
                <p>{dateOnlyFormat(comment.created_at)}</p>
              </div>
              <p className="text-justify">{comment.body}</p>
              <p className="flex w-28 items-center justify-center gap-1 rounded-full border p-[2%]">
                <span>votes</span>
                <span>| {comment.votes}</span>
              </p>
            </li>
          </ul>
        ))
      )}
    </section>
  );
};

export default Comments;
