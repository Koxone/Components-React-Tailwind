import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CardsContainer from "./components/containers/TextsContainer";
import ButtonsContainer from "./components/containers/ButtonsContainer";
import Layout from "./styles/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout content={<CardsContainer />} />} />
        <Route
          path="/buttons"
          element={<Layout content={<ButtonsContainer />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
