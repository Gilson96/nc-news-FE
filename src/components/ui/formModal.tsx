import { MinusCircle, PlusCircle, XCircle } from "lucide-react";
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
import {
  useEffect,
  useState,
  type FormEvent,
  type SetStateAction,
} from "react";
import { useGetTopics } from "../../hooks/useFetchActions";

const FormModal = ({
  handleSubmit,
  successSubmit,
  setSuccessSubmit,
  errorSubmit,
  setErrorSubmit,
  openDialog,
  setOpenDialog,
}: {
  setSuccessSubmit: React.Dispatch<SetStateAction<boolean>>;
  successSubmit: boolean;
  errorSubmit: string | undefined;
  setErrorSubmit: React.Dispatch<SetStateAction<string | undefined>>;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<SetStateAction<boolean>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  const [openNewTopic, setOpenNewTopic] = useState(false);
  const { topics, isLoading } = useGetTopics();

  if (successSubmit) {
    setOpenDialog(false);
    setSuccessSubmit(false);
  }

  if (!openDialog) {
    setErrorSubmit("");
  }

  return (
    <Dialog open={openDialog ? true : false}>
      <DialogTrigger
        onClick={() => setOpenDialog(true)}
        className="flex w-full cursor-pointer items-center gap-1 rounded py-[2%] pl-[5%] hover:underline lg:gap-2 lg:border lg:py-[4%]"
      >
        <PlusCircle color="black" className="size-4" />
        <span className="w-full text-sm lg:text-left lg:text-base">
          Add Article
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex w-full items-center justify-between border-b pb-2 text-left">
            <p>Add Article</p>
            <XCircle onClick={() => setOpenDialog(false)} />
          </DialogTitle>
        </DialogHeader>
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
                  className="flex flex-wrap pt-3"
                  required={!openNewTopic && true}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="" />
                      <Label
                        className="animate animate-pulse bg-gray-200 text-gray-200"
                        htmlFor="r1"
                      >
                        Load
                      </Label>
                    </div>
                  ) : (
                    topics
                      ?.filter((topic) => topic.count !== "0")
                      .map((topic) => (
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={topic.slug} id="r1" />
                          <Label htmlFor="r1">{topic.slug}</Label>
                        </div>
                      ))
                  )}
                </RadioGroup>
                <p className="mt-[5%] mb-[2%] flex items-center justify-center gap-2">
                  <PlusCircle
                    size={20}
                    className="cursor-pointer"
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
                    className="cursor-pointer"
                    onClick={() => setOpenNewTopic(false)}
                  />
                  <span>Choose a topic</span>
                </p>

                <Label className="pt-[5%] pb-[2%]">Add new topic</Label>
                <Input
                  type="text"
                  name="new_topic"
                  placeholder="NewTopic"
                  className={`w-full ${errorSubmit?.length! > 1 ? "border-red-400" : ""}`}
                  pattern="[^\s]+"
                  title="No white spaces"
                  required={openNewTopic && true}
                />
                {errorSubmit?.length! > 1 ? (
                  <p className="text-xs text-red-400">{errorSubmit}</p>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
          <button
            type="submit"
            className="cursor-pointer place-self-end rounded-full border bg-sky-700 px-[4%] py-[1%] font-medium text-white max-md:relative"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
