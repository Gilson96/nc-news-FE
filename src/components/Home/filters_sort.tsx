import { SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type { FiltersProps } from "./filters";
import FilterItem from "../ui/filterItem";

const FiltersSort = ({ setFilters }: FiltersProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:hidden">
        <SlidersHorizontal className="cursor-pointer text-sky-700" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-[20%] bg-white md:right-[30%]">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuItem>
          <FilterItem
            order="DESC"
            setFilters={setFilters}
            sort_by="created_at"
            title="Newest"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FilterItem
            order="ASC"
            setFilters={setFilters}
            sort_by="created_at"
            title="Oldest"
          />
        </DropdownMenuItem>
        <hr className="h-[0.2px] bg-gray-200" />
        <DropdownMenuItem>
          <FilterItem
            order="DESC"
            setFilters={setFilters}
            sort_by="count"
            title="More comments"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FilterItem
            order="ASC"
            setFilters={setFilters}
            sort_by="count"
            title="Less comments"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FiltersSort;
