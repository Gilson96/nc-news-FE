import Article from "../Article/article";
import Filters from "./filters";

const Home = () => {
  return (
    <main className="mt-[2rem] flex h-full w-full flex-col items-center justify-center rounded-lg border">
      <Filters />
      <Article />
    </main>
  );
};

export default Home;
