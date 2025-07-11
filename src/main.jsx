import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import TextsContainer from "./components/containers/TextsContainer";
import ButtonsContainer from "./components/containers/ButtonsContainer";
import InputsContainer from "./components/containers/InputsContainer";
import Layout from "./styles/Layout";
import Demo from "./demos/Demo";
import { Analytics } from "@vercel/analytics/react";
import CardsContainer from "./components/containers/CardsContainer";
import TogglesContainer from "./components/containers/TogglesContainer";
import PopoverComingSoon from "./components/feedback/PopoverComingSoon";
import TooltipsContainer from "./components/containers/TooltipsContainer";
import PopoversContainer from "./components/containers/PopoversContainer";
import SlidersContainers from "./components/containers/SlidersContainers";
import DropdownsContainer from "./components/containers/DropdownsContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout content={<TextsContainer />} />} />
        <Route
          path="/buttons"
          element={<Layout content={<ButtonsContainer />} />}
        />
        <Route
          path="/inputs"
          element={<Layout content={<InputsContainer />} />}
        />
        <Route
          path="/sliders"
          element={<Layout content={<SlidersContainers />} />}
        />
        <Route
          path="/popovers"
          element={<Layout content={<PopoversContainer />} />}
        />
        <Route
          path="/dropdowns"
          element={<Layout content={<DropdownsContainer />} />}
        />
        <Route
          path="/selects"
          element={<Layout content={<PopoverComingSoon />} />}
        />
        <Route
          path="/sidebars"
          element={<Layout content={<PopoverComingSoon />} />}
        />
        <Route
          path="/tooltips"
          element={<Layout content={<TooltipsContainer />} />}
        />
        <Route
          path="/badges"
          element={<Layout content={<PopoverComingSoon />} />}
        />
        <Route
          path="/cards"
          element={<Layout content={<CardsContainer />} />}
        />
        <Route
          path="/toggles"
          element={<Layout content={<TogglesContainer />} />}
        />
        <Route path="/demo/:component" element={<Demo />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>,
);
