import FiltersTopics from "./filters_topic";
import FiltersSort from "./filters_sort";
import type { HomeProps } from "./home";

export type FiltersProps = {
  setFilters: React.Dispatch<React.SetStateAction<HomeProps>>;
};

const Filters = ({ setFilters }: FiltersProps) => {
  return (
    <section className="flex w-full items-center justify-between border-b p-[2%] bg-white rounded-t-lg">
      <FiltersTopics setFilters={setFilters} />
      <FiltersSort setFilters={setFilters} />
    </section>
  );
};

export default Filters;
