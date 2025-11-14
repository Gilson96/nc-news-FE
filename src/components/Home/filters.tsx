import { Link } from "react-router";
import FiltersSort from "./filters_sort";
import type { HomeProps } from "./home";
import FilterItem from "../ui/filterItem";

export type FiltersProps = {
  setFilters: React.Dispatch<React.SetStateAction<HomeProps>>;
};

const Filters = ({ setFilters }: FiltersProps) => {
  return (
    <section className="flex w-full items-center justify-between border-b bg-white p-[2%]  lg:w-[60%] lg:h-full lg:flex-col lg:items-start lg:justify-start lg:gap-5 lg:border lg:px-[2%] lg:py-[1%]">
      <div className="p-[2%] lg:flex lg:flex-col lg:items-start lg:gap-2">
        <h1 className="border-b max-lg:hidden lg:text-lg lg:font-medium">
          Topics
        </h1>
        <span className="flex gap-3">
          <Link
            className="w-auto rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100 lg:font-normal"
            to={`/topic?topic=coding`}
          >
            Coding
          </Link>
          <Link
            className="w-auto rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100 lg:font-normal"
            to={`/topic?topic=cooking`}
          >
            Cooking
          </Link>
          <Link
            className="w-auto rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100 lg:font-normal"
            to={`/topic?topic=football`}
          >
            Football
          </Link>
        </span>
      </div>
      <FiltersSort setFilters={setFilters} />
      <div className="max-lg:hidden lg:flex lg:w-full lg:flex-col lg:items-start lg:gap-2 lg:p-[2%]">
        <h1 className="border-b max-lg:hidden lg:text-lg lg:font-medium">
          Sort by
        </h1>
        <ul className="flex w-full justify-between gap-2">
          <div className="flex w-full flex-col gap-2">
            <li className="flex cursor-pointer items-center justify-center rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100 lg:font-normal">
              <FilterItem
                order="DESC"
                setFilters={setFilters}
                sort_by="created_at"
                title="Newest"
              />
            </li>
            <li className="flex cursor-pointer items-center justify-center rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100 lg:font-normal">
              <FilterItem
                order="ASC"
                setFilters={setFilters}
                sort_by="created_at"
                title="Oldest"
              />
            </li>
          </div>
          <div className="flex w-full flex-col gap-2">
            <li className="flex cursor-pointer items-center justify-center rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100 lg:font-normal">
              <FilterItem
                order="DESC"
                setFilters={setFilters}
                sort_by="count"
                title="More comments"
              />
            </li>
            <li className="flex cursor-pointer items-center justify-center rounded border px-[4%] py-[2%] font-medium hover:bg-gray-100 lg:font-normal">
              <FilterItem
                order="ASC"
                setFilters={setFilters}
                sort_by="count"
                title="Less comments"
              />
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Filters;
