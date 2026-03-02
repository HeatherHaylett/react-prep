import { ExerciseShell } from "../../components/ExerciseShell";
import { formatTime } from "@react-prep/shared";
import { memo, useCallback, useEffect, useRef, useState } from "react";

// GOAL: Build a stopwatch with lap tracking
// ACCEPTANCE CRITERIA:
// - Display elapsed time in MM:SS.ms format
// - Start/stop toggle button
// - Lap button records current time
// - Reset clears time and laps
// - Display list of laps with lap times
// - useRef for interval management
// - useCallback for stable handlers

export default function Stopwatch() {
  const [time, setTime] = useState<number>(0)
  const [start, setStart] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
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

  const handleReset = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStart(false);
    setTime(0)
    setLaps([])
  }, []);

  const handleRecordLap = useCallback(() => {
    setLaps(laps => [...laps, time])
  }, [time]);

  return (
    <ExerciseShell
      title="Stopwatch with Laps"
      description="Stopwatch with lap tracking and time formatting."
    >
      <p>{formatTime(time)}</p>
      <button onClick={() => setStart(s => !s)}>{start ? "Stop" : "Start"}</button>
      <button onClick={start ? handleRecordLap : handleReset}>{start ? "Lap" : "Reset"}</button>
      <LapList laps={laps} />
    </ExerciseShell>
  );
}

const LapList = memo(function LapList({ laps }: { laps: number[] }) {
  return (
    <div>
      {laps.map((lap, i) => {
        return (
          <div style={{ display: "flex", gap: "1rem" }} key={`lap-${i}`}>
            <p>Lap {i + 1}</p>
            <p>{formatTime(lap)}</p>
          </div>
        )
      })}
    </div>
  )
})