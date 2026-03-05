import { useState } from "react";
import "./styles.css";

export default function DistanceExercise({ name }) {
  const [distanceKm, setDistanceKm] = useState(0);

  return (
    <div className="distancePanel">
      <div className="exerciseName">{name}</div>

      <div className="distanceCounter">Distance: {distanceKm.toFixed(1)} km</div>

      <button
        className="distanceBtn"
        onClick={() => setDistanceKm((d) => d + 0.5)}
        type="button"
      >
        + Add 0.5 km
      </button>

      <button
        className="distanceBtn subtle"
        onClick={() => setDistanceKm(0)}
        type="button"
      >
        Reset
      </button>
    </div>
  );
}