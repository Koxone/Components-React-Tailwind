import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import TextsContainer from "./components/containers/TextsContainer";
import ButtonsContainer from "./components/containers/ButtonsContainer";
import Layout from "./styles/Layout";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout content={<TextsContainer />} />} />
        <Route
          path="/buttons"
          element={<Layout content={<ButtonsContainer />} />}
        />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>,
);
