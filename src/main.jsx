import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainContainer from "./components/containers/MainContainer";
import CardsContainer from "./components/containers/CardsContainer";
import ButtonsContainer from "./components/containers/ButtonsContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainContainer content={<CardsContainer />} />}
        />
        <Route
          path="/buttons"
          element={<MainContainer content={<ButtonsContainer />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
