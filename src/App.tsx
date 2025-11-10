import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home/home";
import Navigator from "./components/Navigator/navigator";

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
