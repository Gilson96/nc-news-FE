import FiltersTopics from "./filters_topic";
import FiltersSort from "./filters_sort";

const Filters = () => {
  return (
    <section className="flex w-full items-center justify-between p-[2%] border-b">
      <FiltersTopics />
      <FiltersSort />
    </section>
  );
};

export default Filters;
