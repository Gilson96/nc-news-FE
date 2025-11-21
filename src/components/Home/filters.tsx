import FiltersSort from "./filters_sort";
import type { HomeProps } from "./home";
import FilterItem from "../ui/filterItem";
import HomeOptions from "../Article/homeOptions";
import TopicsInFilters from "../Topic/topicsInFilters";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

export type FiltersProps = {
  setFilters: React.Dispatch<React.SetStateAction<HomeProps>>;
};

const Filters = ({ setFilters }: FiltersProps) => {
  const [topicsQuantity, setTopicsQuantity] = useState<number>(3);
  const screenSize = useScreenSize();

  return screenSize.width < 1024 ? (
    <section className="flex h-18 w-full items-center justify-between border-b bg-white px-[2%]">
      <ul
        className={`flex w-full gap-3 ${topicsQuantity > 3 ? "max-xs:w-[75%] xs:w-[80%] overflow-y-auto" : ""} `}
      >
        <TopicsInFilters setTopicsQuantity={setTopicsQuantity} />
      </ul>
      <span className="flex items-center gap-1 lg:hidden">
        <FiltersSort setFilters={setFilters} />
        <HomeOptions />
      </span>
    </section>
  ) : (
    <section className="flex h-full w-[60%] flex-col gap-3 border-r bg-white p-[2%]">
      <ul>
        <h1 className="w-[22%] border-b text-lg font-medium">Topics</h1>
        <li className="flex flex-wrap gap-2 py-[2%]">
          <TopicsInFilters setTopicsQuantity={setTopicsQuantity} />
        </li>
      </ul>

      <div className="flex w-full flex-col items-start gap-2 p-[2%]">
        <h1 className="border-b text-lg font-medium">Sort by</h1>
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
