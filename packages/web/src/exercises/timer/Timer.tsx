import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a timer with start, stop, and reset
// ACCEPTANCE CRITERIA:
// - Display elapsed time in MM:SS.ms format
// - Start button begins counting
// - Stop button pauses
// - Reset button returns to 00:00.00
// - useEffect cleanup to prevent memory leaks
// - Use formatTime from @react-prep/shared

export default function Timer() {
  return (
    <ExerciseShell
      title="Timer"
      description="Start, stop, and reset timer with useEffect cleanup."
    >
      <p>TODO: Implement timer</p>
    </ExerciseShell>
  );
}
