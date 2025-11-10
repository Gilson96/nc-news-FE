import { SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type { FiltersProps } from "./filters";

const FiltersSort = ({ setFilters }: FiltersProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SlidersHorizontal className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-[20%] bg-white">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() =>
            setFilters((prev) => ({ ...prev, created_at: "DESC" }))
          }
          className="flex cursor-pointer items-center justify-between"
        >
          <span>Newest</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setFilters((prev) => ({ ...prev, created_at: "ASC" }))}
          className="flex cursor-pointer items-center justify-between"
        >
          <span>Oldest</span>
        </DropdownMenuItem>
        <hr className="h-[0.2px] bg-gray-200" />
        <DropdownMenuItem
          onClick={() => setFilters((prev) => ({ ...prev, comments: "DESC" }))}
          className="flex cursor-pointer items-center justify-between"
        >
          <span>More comments</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setFilters((prev) => ({ ...prev, comments: "ASC" }))}
          className="flex cursor-pointer items-center justify-between"
        >
          <span>Less comments</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FiltersSort;
