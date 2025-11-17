import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePostArticle } from "../../hooks/usePostActions";
import useScreenSize from "../../hooks/useScreenSize";
import FormModal from "../ui/formModal";

const PostArticle = () => {
  const { handleSubmit } = usePostArticle();
  const screenSize = useScreenSize();

  return (
    <>
      {screenSize.width > 720 ? (
        <>
          {" "}
          <FormModal handleSubmit={handleSubmit} />
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical className="cursor-pointer text-sky-700" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="relative right-[20%] bg-white md:right-[30%]">
            <FormModal handleSubmit={handleSubmit} />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default PostArticle;
