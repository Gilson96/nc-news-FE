import { useEffect, useState } from "react";
import type { Users } from "../../utils/dataTypes";
import axios from "axios";

type AuthorsProps = {
  article_author: string | undefined;
};

const Authors = ({ article_author }: AuthorsProps) => {
  const [user, setUser] = useState<Users>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://nc-news-api-99f5fdc34977.herokuapp.com/api/users`)
      .then(function (response) {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const findUserImage = user?.find(
    (u) => u.username === article_author,
  )?.avatar_url;

  return isLoading ? (
    <span
      className={`animate h-8 w-8 animate-pulse rounded-full bg-gray-300`}
    ></span>
  ) : (
    <img
      className={`h-8 w-8 rounded-full`}
      src={findUserImage}
      alt="user avatar"
    />
  );
};

export default Authors;
