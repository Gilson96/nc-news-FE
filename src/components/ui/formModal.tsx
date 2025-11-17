import { MinusCircle, PlusCircle } from "lucide-react";
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
import { useState, type FormEvent } from "react";

const FormModal = ({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  const [openNewTopic, setOpenNewTopic] = useState(false);
  return (
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
              <Input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full"
                required
              />
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-1">
              {!openNewTopic && (
                <>
                  <Label>Topic</Label>
                  <RadioGroup
                    defaultValue="comfortable"
                    name="topic"
                    className="flex pt-3"
                    required={!openNewTopic && true}
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
                  <p className="mt-[5%] mb-[2%] flex items-center justify-center gap-2">
                    <PlusCircle
                      size={20}
                      className=""
                      onClick={() => setOpenNewTopic(true)}
                    />
                    <span>Add a new topic</span>
                  </p>
                </>
              )}

              {openNewTopic && (
                <>
                  <p className="mt-[5%] mb-[2%] flex items-center justify-center gap-2">
                    <MinusCircle
                      size={20}
                      className="mt-[5%] mb-[2%]"
                      onClick={() => setOpenNewTopic(false)}
                    />
                    <span>Choose a topic</span>
                  </p>

                  <Label className="pt-[5%] pb-[2%]">Add new topic</Label>
                  <Input
                    type="text"
                    name="new_topic"
                    placeholder="New topic"
                    className="w-full"
                    required={openNewTopic && true}
                  />
                </>
              )}
            </div>
            {/* <div className="flex w-full items-center justify-start gap-2">
              <Label>Image</Label>
              <input
                name="article_img_url"
                type="file"
                className="cursor-pointer"
                accept="image/png, image/jpeg"
              />
            </div> */}
            <button
              type="submit"
              className="place-self-end rounded-full border bg-sky-700 px-[4%] py-[1%] font-medium text-white max-md:relative"
            >
              Submit
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
