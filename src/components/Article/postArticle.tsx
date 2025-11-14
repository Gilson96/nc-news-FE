import { EllipsisVertical, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const PostArticle = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleData = Object.fromEntries(formData.entries());
    console.log(articleData);
    return formData;
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical className="cursor-pointer text-sky-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative right-[20%] bg-white md:right-[30%]">
          <Dialog>
            <DialogTrigger className="flex w-full cursor-pointer items-center gap-1 rounded py-[2%] pl-[5%] hover:bg-gray-100">
              <PlusCircle color="black" size={16} />
              <span className="text-sm">Add Article</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="border-b pb-2 text-left">
                  Add Article
                </DialogTitle>
                <form
                  className="flex w-full flex-col items-start justify-start gap-5"
                  onSubmit={handleSubmit}
                >
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <Label>Title</Label>
                    <Input type="text" name="title" placeholder="Title" />
                  </div>

                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <Label>Topic</Label>
                    <RadioGroup
                      defaultValue="comfortable"
                      name="topic"
                      className="flex pt-3"
                    >
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="coding" id="r1" />
                        <Label htmlFor="r1">Coding</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="cooking" id="r2" />
                        <Label htmlFor="r2">Cooking</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="football" id="r3" />
                        <Label htmlFor="r3">Football</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex w-full items-center justify-start gap-2">
                    <Label>Image</Label>
                    <Input
                      name="article_img_url"
                      type="file"
                      className="cursor-pointer"
                    />
                  </div>
                  <button
                    type="submit"
                    className="place-self-end rounded-full border bg-sky-700 px-[4%] py-[1%] font-medium text-white"
                  >
                    Submit
                  </button>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default PostArticle;
