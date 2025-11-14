import axios from "axios";
import { useState } from "react";
import { ChevronRightCircleIcon } from "lucide-react";
import { toast } from "sonner";

type PostCommentsProps = {
  articleId: number;
};

const PostComments = ({ articleId }: PostCommentsProps) => {
  const [inputValue, setInputValue] = useState<string>();
  const [openTextArea, setOpenTextArea] = useState(false);

  const newComment = {
    article_id: articleId,
    body: inputValue,
    votes: 0,
    username: "Guest",
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        `https://nc-news-api-99f5fdc34977.herokuapp.com/api/articles/${articleId}/comments`,
        newComment,
      )
      .then(() => {
        setOpenTextArea(false);
        toast(
          `Your comment was sucessfully added!\nRefresh to see the comment`,
          {},
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="flex w-full flex-col justify-end gap-1">
      <form
        className={`flex h-full flex-col items-center justify-between p-[1%] text-sm ${openTextArea ? "border" : "rounded-full border border-b"}`}
        onSubmit={handleSubmit}
        onClick={() => {
          setOpenTextArea(true);
        }}
      >
        {!openTextArea ? (
          <p className="flex w-full cursor-pointer items-center justify-between px-[2%] py-[1%] text-gray-500">
            <span>Add you comment...</span>
            <ChevronRightCircleIcon color="black" />
          </p>
        ) : (
          <>
            <textarea
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
              required
              minLength={2}
              className="w-full outline-white"
              placeholder="Add new comment..."
            />

            <div className="flex w-full place-content-end gap-1 pt-1">
              <button
                type="submit"
                className="w-auto cursor-pointer rounded-full border bg-sky-700 px-[2%] py-[1%] font-medium text-white"
              >
                Send
              </button>
            </div>
          </>
        )}
      </form>
      {openTextArea && (
        <button
          type="reset"
          onClick={() => {
            setOpenTextArea(false);
          }}
          className="place-s-end w-32 cursor-pointer rounded-full border bg-gray-100 px-[2%] py-[1%] text-sm font-medium lg:w-40"
        >
          Cancel comment
        </button>
      )}
    </section>
  );
};

export default PostComments;
