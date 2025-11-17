import axios from "axios";

export const usePostArticle = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const articleData = Object.fromEntries(formData.entries());
    const sendArticle = {
      title: articleData.title,
      topic:
        articleData.topic === undefined
          ? articleData.new_topic
          : articleData.topic,
      author: "guest",
    };

    if (articleData.new_topic !== undefined) {
      axios
        .post(
          "https://nc-news-api-99f5fdc34977.herokuapp.com/api/topics",
          articleData.new_topic,
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }

    // axios
    //   .post(
    //     "https://nc-news-api-99f5fdc34977.herokuapp.com/api/users/article",
    //     sendArticle,
    //   )
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  };
  return { handleSubmit };
};
