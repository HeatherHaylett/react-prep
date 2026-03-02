import { ExerciseShell } from "../../components/ExerciseShell";
import { formatTime } from "@react-prep/shared";
import { useEffect, useRef, useState } from "react";

// GOAL: Build a timer with start, stop, and reset
// ACCEPTANCE CRITERIA:
// - Display elapsed time in MM:SS.ms format
// - Start button begins counting
// - Stop button pauses
// - Reset button returns to 00:00.00
// - useEffect cleanup to prevent memory leaks
// - Use formatTime from @react-prep/shared

export default function Timer() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!start) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 10)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [start])

  return (
    <ExerciseShell
      title="Timer"
      description="Start, stop, and reset timer with useEffect cleanup."
    >
      {formatTime(time)}
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
      <button onClick={() => {
        setStart(false)
        setTime(0)
      }}>Reset</button>
    </ExerciseShell>
  );
}
