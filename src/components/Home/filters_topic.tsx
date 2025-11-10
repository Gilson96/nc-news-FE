import axios from "axios";
import { useState, useEffect } from "react";
import type { Topics } from "../../utils/dataTypes";
import type { FiltersProps } from "./filters";

const FiltersTopics = ({ setFilters }: FiltersProps) => {
  const [topics, setTopics] = useState<Topics>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://nc-news-api-99f5fdc34977.herokuapp.com/api/topics")
      .then(function (response) {
        setTopics(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="flex items-center justify-center gap-2">
      {isLoading ? (
        <button className="flex w-20 items-center justify-center rounded border px-[3%] py-[3%] capitalize">
          <p className="animate animate-pulse bg-gray-300 text-gray-300">
            Loading
          </p>
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              setFilters((prev) => ({ ...prev, topic: "all" }));
            }}
            className="flex w-20 items-center justify-center rounded border px-[3%] py-[1%] capitalize"
          >
            All
          </button>
          {topics?.map((topic) => (
            <button
              onClick={() => {
                setFilters((prev) => ({ ...prev, topic: topic.slug }));
              }}
              className="flex w-20 items-center justify-center rounded border px-[3%] py-[1%] capitalize"
            >
              {topic.slug}
            </button>
          ))}
        </>
      )}
    </section>
  );
};

export default FiltersTopics;
