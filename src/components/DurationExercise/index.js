import { useEffect, useMemo, useState } from "react";
import "./styles.css";

const pad = (n) => String(n).padStart(2, "0");

export default function DurationExercise() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  const time = useMemo(() => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }, [seconds]);

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="durPanel">
      <div className="timeDisplay">{time}</div>

      {!running ? (
        <button
          className="startBtn"
          onClick={() => setRunning(true)}
        >
          START
        </button>
      ) : (
        <button
          className="controlBtn"
          onClick={() => setRunning(false)}
        >
          ■
        </button>
      )}

      <button
        className="controlBtn"
        onClick={reset}
      >
        ↻
      </button>
    </div>
  );
}