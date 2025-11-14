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
    <main className="flex h-full w-full flex-col items-center justify-center border lg:mt-0 lg:h-screen lg:w-full lg:flex-row lg:items-start lg:place-self-center lg:overflow-hidden lg:pt-12">
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
