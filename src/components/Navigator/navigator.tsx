import { Link } from "react-router";

const Navigator = () => {
  return (
    <main className="flex h-12 w-full items-center justify-start border-b bg-white px-[3%] py-[6%] lg:fixed lg:py-[2%]">
      <div className="flex items-center gap-2">
        <Link className="text-xl font-bold text-sky-700" to={"/"}>
          NC-News
        </Link>
      </div>
    </main>
  );
};

export default Navigator;
