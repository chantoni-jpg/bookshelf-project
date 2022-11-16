import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Bookshelf from "./pages/Bookshelf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookshelf" element={<Bookshelf />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
