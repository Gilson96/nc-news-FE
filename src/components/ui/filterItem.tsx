import type { SetStateAction } from "react";
import type { HomeProps } from "../Home/home";

type FilterItemProps = {
  setFilters: React.Dispatch<SetStateAction<HomeProps>>;
  sort_by: string;
  order: string;
  title: string;
};

const FilterItem = ({ setFilters, sort_by, order, title }: FilterItemProps) => {
  return (
    <p
      onClick={() =>
        setFilters((prev) => ({
          ...prev,
          sort_by: sort_by,
          order: order,
        }))
      }
      className="flex cursor-pointer items-center justify-between"
    >
      <span>{title}</span>
    </p>
  );
};

export default FilterItem;
