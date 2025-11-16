import { useGetAuthors } from "../../hooks/useFetchActions";

const Authors = ({
  article_author,
}: {
  article_author: string | undefined;
}) => {
  const { isLoading, findUserImage } = useGetAuthors(article_author);

  return isLoading ? (
    <span
      className={`animate h-8 w-8 animate-pulse rounded-full border bg-gray-300`}
    ></span>
  ) : (
    <img
      className={`h-8 w-8 rounded-full border`}
      src={findUserImage}
      alt="user avatar"
    />
  );
};

export default Authors;
