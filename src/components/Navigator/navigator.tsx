import { Search } from "lucide-react";
import Menu from "./menu";
import { Link } from "react-router";

const Navigator = () => {
  return (
    <main className="flex bg-sky-700 shadow h-12 w-full items-center justify-between border-b px-[3%] py-[6%] md:py-[3%]">
      <div className="flex items-center gap-2">
        {/* <span>
          <Menu />
        </span> */}
        <Link className="font-bold text-2xl text-white" to={"/"}>NC-News</Link>
      </div>

      <div className="flex w-[50%] items-center gap-2 rounded-full  px-[2%] py-[1%]">
        {/* <Search size={20} />
        <p>search...</p> */}
      </div>

      <div className="flex items-center">
        {/* <button className="flex w-24 cursor-pointer items-center justify-center rounded-full border bg-sky-600 px-[2%] py-[5%] text-white shadow">
          Log In
        </button> */}
      </div>
    </main>
  );
};

export default Navigator;
