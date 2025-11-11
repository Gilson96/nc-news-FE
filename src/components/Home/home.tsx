import { useState } from "react";
import Articles from "../Article/articles";
import Filters from "./filters";

export type HomeProps = {
  sort_by: string;
  order: string;
  topic: string;
};

const Home = () => {
  const [filters, setFilters] = useState({
    sort_by: "created_at",
    order: "DESC",
    topic: "all",
  });

  return (
    <main className="mt-8 flex h-full w-full flex-col items-center justify-center rounded-lg border md:w-[60%] md:place-self-center">
      <Filters setFilters={setFilters} />
      <Articles
        sort_by={filters.sort_by}
        order={filters.order}
        topic={filters.topic}
      />
    </main>
  );
};

export default Home;
