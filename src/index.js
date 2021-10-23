import React from "react";
import ReactDOM from "react-dom";

import Wheel from "./wheel";

import "./styles.css";

const SASHET = ["Happy", "Excited", "Tender", "Scared", "Angry", "Sad"];
const SASHET_DESCRIPTION = [
  "Nourished, Contented, Optimistic, Satisfied, Glad",
  "Enthusiastic, Competitive, Energetic, Active",
  "Sympathetic, Kind, Soft",
  "Nerves, Tensed, Terrified, Frightened",
  "Furious, Irritated",
  "Health Problem, Depressed, Dejected",
];

export function App() {
  const [selected, setSelected] = React.useState(null);
  const [spinning, setSpinning] = React.useState(false);

  function onStoppedSpinning() {
    setSpinning(false);
  }

  function onStartSpinning() {
    setSpinning(true);
  }

  return (
    <div className="App">
      <h1>Let's talk about...</h1>
      <Wheel
        items={SASHET}
        onSelectItem={setSelected}
        onStoppedSpinning={onStoppedSpinning}
        onStartSpinning={onStartSpinning}
      />
      {!spinning && selected !== null && <p>{SASHET_DESCRIPTION[selected]}</p>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
