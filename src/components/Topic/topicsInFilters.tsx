import { useEffect, type SetStateAction } from "react";
import { useGetTopics } from "../../hooks/useFetchActions";
import { Link } from "react-router";

type TopicsInFiltersProps = {
  setTopicsQuantity: React.Dispatch<SetStateAction<number>>;
};

const TopicsInFilters = ({ setTopicsQuantity }: TopicsInFiltersProps) => {
  const { topics, isLoading } = useGetTopics();

  const queryTopics = (topic: string) => {
    return `/articles?topic=${topic}`;
  };

  useEffect(() => {
    if (topics !== undefined) {
      setTopicsQuantity(topics.length);
    }
  }, [topics]);

  if (isLoading) {
    return (
      <button className="h-8 w-16 rounded border px-3">
        <p className="animate animate-pulse bg-gray-200 text-gray-200">L</p>
      </button>
    );
  }

  return topics
    ?.filter((topic) => topic.count !== "0")
    .map((topic) => (
      <Link
        className="h-auto w-auto rounded border p-[2%] text-sm font-medium capitalize hover:bg-gray-100 lg:text-base lg:font-normal"
        to={queryTopics(topic.slug)}
      >
        {topic.slug}
      </Link>
    ));
};

export default TopicsInFilters;
