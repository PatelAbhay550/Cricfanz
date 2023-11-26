import "./App.css";
import CreateBlog from "./Create";
import React from "react";
import Posts from "./Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FullPost from "./Fullpost";
import Error from "./Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="*" element={<Error />} />
          <Route path="/createpostpass" element={<CreateBlog />} />
          <Route path="/post/:title" element={<FullPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
