import { useState } from "react";
import "./App.css";

import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";

import runningIcon from "./assets/running.png";
import plankingIcon from "./assets/planking.png";
import pushupsIcon from "./assets/pushups.png";

const EXERCISES = [
  { id: 1, name: "Push Ups", type: "repetition", icon: "pushups" },
  { id: 2, name: "Running", type: "duration", icon: "running" },
  { id: 3, name: "Plank", type: "duration", icon: "plank" },
];

const ICONS = {
  running: runningIcon,
  plank: plankingIcon,
  pushups: pushupsIcon,
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

  // MAIN MENU
  if (!selected) {
    return (
      <div className="page">
        <h1 className="pageTitle">
          Main Screen - Exercise Selection
        </h1>

        <div className="menuRow">
          {EXERCISES.map((ex) => (
            <button
              key={ex.id}
              className="menuTile"
              onClick={() => setSelected(ex)}
            >
              <IconImg
                name={ex.icon}
                className="menuIconImg"
                alt={ex.name}
              />
              <div className="menuName">{ex.name}</div>
              <div className="menuType">
                ({ex.type === "repetition" ? "Repetition" : "Duration"})
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // EXERCISE SCREEN
  return (
    <div className="page">
      <div className="exerciseHeader">
        <IconImg
          name={selected.icon}
          className="headerIconImg"
        />
        <div className="headerTitle">
          {selected.name.toUpperCase()}{" "}
          <span className="headerSub">
            ({selected.type === "repetition"
              ? "Repetition"
              : "Duration"})
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
          <RepetitionExercise />
        ) : (
          <DurationExercise />
        )}
      </div>

      <button
        className="backButton"
        onClick={() => setSelected(null)}
      >
        ↩ Return to menu
      </button>
    </div>
  );
}