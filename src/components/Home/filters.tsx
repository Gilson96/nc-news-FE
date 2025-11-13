import { Link } from "react-router";
import FiltersSort from "./filters_sort";
import type { HomeProps } from "./home";

export type FiltersProps = {
  setFilters: React.Dispatch<React.SetStateAction<HomeProps>>;
};

const Filters = ({ setFilters }: FiltersProps) => {
  return (
    <section className="flex w-full items-center justify-between rounded-t-lg border-b bg-white p-[2%]">
      <div className="flex items-center gap-2">
        <Link
          className="w-auto rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100"
          to={`/topic?topic=coding`}
        >
          Coding
        </Link>
        <Link
          className="w-auto rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100"
          to={`/topic?topic=cooking`}
        >
          Cooking
        </Link>
        <Link
          className="w-auto rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100"
          to={`/topic?topic=football`}
        >
          Football
        </Link>
      </div>
      <FiltersSort setFilters={setFilters} />
    </section>
  );
};

export default Filters;
