import { PlusCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import axios from "axios";
const UploadImage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleImage = formData.get("article_img_url");

    axios
      .post(
        "https://nc-news-api-99f5fdc34977.herokuapp.com/api/users/article/uploadImage",
        articleImage,
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <div
      className={`flex h-60 w-full items-center justify-center rounded-xl bg-gray-300 md:h-80 lg:h-80`}
    >
      <Dialog>
        <DialogTrigger className="flex w-full cursor-pointer items-center justify-center gap-1 rounded py-[2%] pl-[5%]">
          <PlusCircle size={40} className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <form
              className="flex w-full flex-col items-start justify-start gap-5"
              onSubmit={handleSubmit}
            >
              <div className="flex w-full items-center justify-start gap-2">
                <Label>Image</Label>
                <input
                  name="article_img_url"
                  type="file"
                  className="cursor-pointer"
                  accept="image/png, image/jpeg"
                />
              </div>
              <button
                type="submit"
                className="rounded-full border bg-sky-700 px-[4%] py-[1%] font-medium text-white"
              >
                Submit
              </button>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UploadImage;
