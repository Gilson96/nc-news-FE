import { Loader2 } from "lucide-react";
import { dateOnlyFormat } from "../../utils/timeFormat";
import PostComments from "./postComments";
import DeleteComments from "./deleteComments";
import { useGetComments } from "../../hooks/useFetchActions";
import InfoButtons from "../ui/infoButtons";
import { useState } from "react";

type CommentsProps = {
  articleId: number;
};

const Comments = ({ articleId }: CommentsProps) => {
  const [commentId, setCommentId] = useState<number | undefined>();
  const { comments, isLoading, setSuccessDelete, setUpdatedVotes } =
    useGetComments(articleId);

  return (
    <section className="flex flex-col gap-3">
      <h1 className="font-bold">Comments</h1>

      {isLoading ? (
        <p>
          <Loader2 className="animate animate-spin" />
          <span>Loading comments</span>
        </p>
      ) : (
        <div>
          <PostComments articleId={articleId} />
          {comments?.map((comment) => (
            <>
              <ul className="border-b py-[4%] text-sm">
                <li className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <p className="font-medium">{comment.author}</p>
                      <span>&#183;</span>
                      <p>{dateOnlyFormat(comment.created_at)}</p>
                    </div>
                    <span
                      onClick={() => {
                        setCommentId(comment.comment_id);
                      }}
                    >
                      <DeleteComments
                        commentId={commentId}
                        setSuccessDelete={setSuccessDelete}
                      />
                    </span>
                  </div>
                  <p className="text-justify">{comment.body}</p>
                  <div className="flex items-center justify-start">
                    <InfoButtons
                      votes={comment.votes}
                      setUpdatedVotes={setUpdatedVotes}
                      section="comments"
                      sectionId={comment.comment_id}
                    />
                  </div>
                </li>
              </ul>
            </>
          ))}
        </div>
      )}
    </section>
  );
};

export default Comments;
