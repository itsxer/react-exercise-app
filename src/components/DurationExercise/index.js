import { useEffect, useMemo, useState } from "react";
import "./styles.css";

const pad2 = (n) => String(n).padStart(2, "0");

export default function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running]);

  const timeText = useMemo(() => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
  }, [seconds]);

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="durPanel">
      <div className="exerciseName">{name}</div>

      <div className="timeRow">
        <div className="clockCircle" aria-hidden="true">
          <div className="clockHandV" />
          <div className="clockHandH" />
        </div>

        <div className="timeDisplay">{timeText}</div>
      </div>

      <div className="controlsRow">
        {!running ? (
          <button className="startBtn" onClick={() => setRunning(true)} type="button">
            START
          </button>
        ) : (
          <button className="iconBtn" onClick={() => setRunning(false)} type="button" aria-label="Stop">
            ■
          </button>
        )}

        <button className="iconBtn" onClick={reset} type="button" aria-label="Reset">
          ↻
        </button>
      </div>
    </div>
  );
}