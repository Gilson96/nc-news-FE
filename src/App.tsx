import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home/home";
import Navigator from "./components/Navigator/navigator";
import ArticleById from "./components/Article/articleById";
import Topic from "./components/Topic/topic";
import Four0FourError from "./components/ErrorHandling/four0FourError";

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<ArticleById />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/*" element={<Four0FourError />} />
      </Routes>
    </>
  );
}

export default App;
