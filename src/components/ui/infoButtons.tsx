import { User2, ArrowBigUpDash, MessageCircle } from "lucide-react";

type InfoButtonsProps = {
  author: string;
  votes: number;
  count: number;
};

const InfoButtons = ({ author, count, votes }: InfoButtonsProps) => {
  return (
    <>
      <p className="flex w-auto items-center justify-center gap-1 rounded-full border p-[2%]">
        <span>
          <User2 size={15} />
        </span>
        <span>| {author}</span>
      </p>
      <p className="flex items-center justify-center gap-1 rounded-full border px-[4%] py-[2%]">
        <span>
          <ArrowBigUpDash size={15} />
        </span>
        <span>| {votes}</span>
      </p>
      <p className="flex items-center justify-center gap-1 rounded-full border p-[2%]">
        <span>
          <MessageCircle size={15} />
        </span>
        <span>| {count}</span>
      </p>
    </>
  );
};

export default InfoButtons;
