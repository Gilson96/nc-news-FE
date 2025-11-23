import axios from "axios";
import {
  User2,
  ArrowBigUpDash,
  MessageCircle,
  ArrowBigDownDash,
} from "lucide-react";
import { toast } from "sonner";

type InfoButtonsProps = {
  author?: string;
  votes: number;
  count?: string;
  sectionId?: number;
  setUpdatedVotes: React.Dispatch<React.SetStateAction<number | undefined>>;
  section?: string;
};

const InfoButtons = ({
  author,
  count,
  votes,
  sectionId,
  setUpdatedVotes,
  section,
}: InfoButtonsProps) => {
  const incrementVotes = { votes: votes + 1 };
  const decrementVotes = { votes: votes - 1 };

  return (
    <>
      <p
        className={`${author?.length! === 0 || (author === undefined && "hidden")} flex w-auto items-center justify-center gap-1 rounded-full border p-[2%]`}
      >
        <span>
          <User2 size={15} />
        </span>
        <span>| {author}</span>
      </p>
      <p className="flex items-center justify-center gap-1 rounded-full border px-[4%] py-[2%]">
        <ArrowBigUpDash
          className="cursor-pointer hover:fill-sky-700 hover:text-sky-700"
          onClick={() => {
            axios
              .patch(
                `https://nc-news-api-99f5fdc34977.herokuapp.com/api/${section}/${sectionId}`,
                incrementVotes,
              )
              .then(({ data }) => {
                setUpdatedVotes(data.votes);
                toast("Your vote has been given!");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          size={15}
        />
        <span>|</span>
        <ArrowBigDownDash
          className="cursor-pointer hover:fill-sky-700 hover:text-sky-700"
          onClick={() => {
            axios
              .patch(
                `https://nc-news-api-99f5fdc34977.herokuapp.com/api/${section}/${sectionId}`,
                decrementVotes,
              )
              .then(({ data }) => {
                setUpdatedVotes(data.votes);
                toast("Your vote has been given!");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
          size={15}
        />
        <span> {votes}</span>
      </p>
      <p
        className={`${count! === "0" || (count === undefined && "hidden")} flex items-center justify-center gap-1 rounded-full border p-[2%]`}
      >
        <span>
          <MessageCircle size={15} />
        </span>
        <span>| {count}</span>
      </p>
    </>
  );
};

export default InfoButtons;
