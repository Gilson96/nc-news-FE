import { Search } from "lucide-react";
import Menu from "./menu";
import { Link } from "react-router";

const Navigator = () => {
  return (
    <main className="flex h-[3rem] w-full items-center justify-between border-b px-[3%] py-[6%]">
      <div className="flex items-center gap-[0.5rem]">
        <span>
          <Menu />
        </span>
        <Link to={"/"}>Logo</Link>
      </div>

      <div className="flex w-[50%] items-center gap-[0.5rem] rounded-full border px-[2%] py-[1%]">
        <Search size={20} />
        <p>search...</p>
      </div>

      <div className="flex items-center">
        <button className="flex w-[6rem] cursor-pointer items-center justify-center rounded-full border bg-sky-600 px-[2%] py-[5%] text-white shadow">
          Log In
        </button>
      </div>
    </main>
  );
};

export default Navigator;
