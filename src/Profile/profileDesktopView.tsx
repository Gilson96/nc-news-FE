import { UserCircle2 } from "lucide-react";

const ProfileDesktopView = () => {
  return (
    <section className="flex w-full items-center justify-between border-b bg-white p-[2%] lg:h-full lg:w-[60%] lg:flex-col lg:items-start lg:justify-start lg:gap-5 lg:border lg:px-[2%] lg:py-[1%]">
      <div className="flex items-center gap-1">
        <UserCircle2 size={50} />
        <h1 className="border-b max-lg:hidden lg:text-lg lg:font-medium">
          Guest
        </h1>
      </div>
    </section>
  );
};

export default ProfileDesktopView;
