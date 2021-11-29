// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
// import NasaPhoto from "./components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route element={<Home />} path="/" />
          {/* <Route component={NasaPhoto} path="/nasaphoto" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
