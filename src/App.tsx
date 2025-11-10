import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home/home";
import Navigator from "./components/Navigator/navigator";
import ArticleById from "./components/Article/articleById";

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<ArticleById />} />
      </Routes>
    </>
  );
}

export default App;
