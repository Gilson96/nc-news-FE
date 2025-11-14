import { Loader2 } from "lucide-react";
import { dateOnlyFormat } from "../../utils/timeFormat";
import PostComments from "./postComments";
import DeleteComments from "./deleteComments";
import { useGetComments } from "../../hooks/useFetchActions";

type CommentsProps = {
  articleId: number;
};

const Comments = ({ articleId }: CommentsProps) => {
  const { commentId, comments, isLoading, setCommentId, setSuccessDelete } =
    useGetComments(articleId);

  return (
    <section className="flex flex-col gap-3">
      <h1 className="font-bold">Comments</h1>
      {isLoading ? (
        <Loader2 className="animate animate-spin" />
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
                        commentId={commentId === undefined ? 0 : commentId}
                        setSuccessDelete={setSuccessDelete}
                      />
                    </span>
                  </div>
                  <p className="text-justify">{comment.body}</p>
                  <p className="flex w-28 items-center justify-center gap-1 rounded-full border p-[2%]">
                    <span>votes</span>
                    <span>| {comment.votes}</span>
                  </p>
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
