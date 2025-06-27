import { useState } from "react";
import "./index.css";
import MainContainer from "./components/containers/MainContainer";

function App() {
  return (
    <div className="relative grid grid-cols-[auto_1fr] justify-center gap-4">
      <MainContainer />
    </div>
  );
}

export default App;
