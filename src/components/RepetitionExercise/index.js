import { useState } from "react";
import "./styles.css";

export default function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="repPanel">
      <div className="exerciseName">{name}</div>

      <div className="repCounter">Rep Counter: {count}</div>

      <button className="repBtn" onClick={() => setCount((c) => c + 1)} type="button">
        + Add Rep
      </button>

      <button
        className="repBtn"
        onClick={() => setCount((c) => Math.max(0, c - 1))}
        type="button"
      >
        − Remove Rep
      </button>

      <button className="repBtn subtle" onClick={() => setCount(0)} type="button">
        Reset
      </button>
    </div>
  );
}