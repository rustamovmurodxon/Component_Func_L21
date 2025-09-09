import React from "react";
import Crud from "./components/Crud";
import { Navigate, Route, Routes } from "react-router-dom";
import Component_func from "./components/Component_func";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Component_func />} />
        <Route path="/user" element={<Crud />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
