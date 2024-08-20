import React from "react";
import ExploreSlider from "./components/ExploreSlider";
import KeraSmoothSlider from "./components/KeraSmoothSlider";
import "./App.css"; // Global styles
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="slider-container">
          <ExploreSlider />
          <KeraSmoothSlider />
        </div>
      </div>
    </>
  );
}

export default App;
