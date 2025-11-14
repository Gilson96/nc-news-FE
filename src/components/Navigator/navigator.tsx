import { Link } from "react-router";

const Navigator = () => {
  return (
    <main className="flex h-12 w-full items-center justify-between border-b bg-white px-[3%] py-[6%] lg:absolute lg:py-[2%]">
      <div className="flex items-center gap-2">
        <Link className="text-xl font-bold text-sky-700" to={"/"}>
          NC-News
        </Link>
      </div>

      <div className="flex w-[50%] items-center gap-2 rounded-full px-[2%] py-[1%]">
        {/* <Search size={20} />
        <p>search...</p> */}
      </div>

      <div className="flex items-center"></div>
    </main>
  );
};

export default Navigator;
