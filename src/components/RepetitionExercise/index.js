import { useState } from "react";
import "./styles.css";

export default function RepetitionExercise() {
  const [count, setCount] = useState(0);

  return (
    <div className="repPanel">
      <div className="repCounter">
        Rep Counter: {count}
      </div>

      <button
        className="repBtn"
        onClick={() => setCount(count + 1)}
      >
        + Add Rep
      </button>

      <button
        className="repBtn"
        onClick={() =>
          setCount(count > 0 ? count - 1 : 0)
        }
      >
        − Remove Rep
      </button>
    </div>
  );
}