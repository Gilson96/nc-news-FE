import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePostArticle } from "../../hooks/usePostActions";
import useScreenSize from "../../hooks/useScreenSize";
import FormModal from "../ui/formModal";
import { useState } from "react";
import ProfileMobileView from "../../Profile/profileMobileView";

const HomeOptions = () => {
  const { handleSubmit, successSubmit, errorSubmit, setSuccessSubmit } =
    usePostArticle();
  const screenSize = useScreenSize();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      {screenSize.width > 720 ? (
        <>
          {" "}
          <FormModal
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            setSuccessSubmit={setSuccessSubmit}
            errorSubmit={errorSubmit}
            successSubmit={successSubmit}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical
              onClick={() => setOpenDialog(true)}
              className="cursor-pointer text-sky-700"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative right-[20%] bg-white p-[5%] md:right-[30%]">
            <ProfileMobileView />
            <hr className="py-[2%]"/>
            <FormModal
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              setSuccessSubmit={setSuccessSubmit}
              errorSubmit={errorSubmit}
              successSubmit={successSubmit}
              handleSubmit={handleSubmit}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default HomeOptions;
