import { UserCircle2 } from "lucide-react";
import FormModal from "../ui/formModal";
import { usePostArticle } from "../../hooks/usePostActions";
import { useState } from "react";
import MyArticles from "./myArticles";

const ProfileDesktopView = () => {
  const { errorSubmit, handleSubmit, setSuccessSubmit, successSubmit } =
    usePostArticle();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section className="flex w-[50%] items-center justify-between border-b bg-white p-[2%] lg:h-full lg:w-[60%] lg:flex-col lg:items-start lg:justify-start lg:gap-5 lg:border lg:px-[2%] lg:py-[1%]">
      <div className="flex items-center gap-1">
        <UserCircle2 size={50} />
        <h1 className="border-b text-lg font-medium">Guest</h1>
      </div>
      <div className="flex flex-col gap-3 w-full pl-[3%]">
        <FormModal
          errorSubmit={errorSubmit}
          successSubmit={successSubmit}
          handleSubmit={handleSubmit}
          setSuccessSubmit={setSuccessSubmit}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />

        <MyArticles />
      </div>
    </section>
  );
};

export default ProfileDesktopView;
