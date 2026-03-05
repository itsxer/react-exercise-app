import { useState } from "react";
import "./App.css";

import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import DistanceExercise from "./components/DistanceExercise";

import runningIcon from "./assets/running.png";
import plankingIcon from "./assets/planking.png";
import pushupsIcon from "./assets/pushups.png";
import distanceIcon from "./assets/distance.png";

const EXERCISES = [
  { id: 1, name: "Push Ups", type: "repetition", icon: "pushups" },
  { id: 2, name: "Running", type: "duration", icon: "running" },
  { id: 3, name: "Plank", type: "duration", icon: "plank" },
  { id: 4, name: "Cycling", type: "distance", icon: "distance" },
];

const ICONS = {
  running: runningIcon,
  plank: plankingIcon,
  pushups: pushupsIcon,
  distance: distanceIcon,
};

function IconImg({ name, className = "", alt = "" }) {
  return (
    <img
      className={className}
      src={ICONS[name]}
      alt={alt}
      draggable="false"
    />
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);

  // SCREEN 1: MENU
  if (!selected) {
    return (
      <div className="page">
        <h1 className="pageTitle">Main Screen - Exercise Selection</h1>

        <div className="menuGrid">
          {EXERCISES.map((ex) => (
            <button
              key={ex.id}
              type="button"
              className="menuTile"
              onClick={() => setSelected(ex)}
            >
              <IconImg name={ex.icon} className="menuIconImg" alt={ex.name} />

              <div className="menuName">{ex.name}</div>

              <div className="menuType">
                (
                {ex.type === "repetition"
                  ? "Repetition"
                  : ex.type === "duration"
                  ? "Duration"
                  : "Distance"}
                )
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // SCREEN 2: EXERCISE SCREEN
  return (
    <div className="page">
      <div className="exerciseHeader">
        <IconImg name={selected.icon} className="headerIconImg" alt="" />

        <div className="headerTitle">
          {selected.name.toUpperCase()}{" "}
          <span className="headerSub">
            (
            {selected.type === "repetition"
              ? "Repetition"
              : selected.type === "duration"
              ? "Duration"
              : "Distance"}
            )
          </span>
        </div>
      </div>

      <div className="contentCenter">
        <div className="videoBox">
          <div className="videoText">
            Insert {selected.name}
            <br />
            Exercise Video
          </div>
        </div>

        {selected.type === "repetition" ? (
          <RepetitionExercise name={selected.name} />
        ) : selected.type === "duration" ? (
          <DurationExercise name={selected.name} />
        ) : (
          <DistanceExercise name={selected.name} />
        )}
      </div>

      <button
        className="backButton"
        type="button"
        onClick={() => setSelected(null)}
      >
        <span className="backArrow">↩</span>
        <span>Return to menu</span>
      </button>
    </div>
  );
}