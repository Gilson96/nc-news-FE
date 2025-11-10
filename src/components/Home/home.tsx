import { useState } from "react";
import Articles from "../Article/articles";
import Filters from "./filters";

export type HomeProps = {
  created_at: string;
  comments: string;
  topic: string;
};

const Home = () => {
  const [filters, setFilters] = useState({
    created_at: "DESC",
    comments: "DESC",
    topic: "All",
  });

  return (
    <main className="mt-8 flex h-full w-full flex-col items-center justify-center rounded-lg border">
      <Filters setFilters={setFilters} />
      <Articles
        created_at={filters.created_at}
        comments={filters.comments}
        topic={filters.topic}
      />
    </main>
  );
};

export default Home;
