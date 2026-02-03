import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a virtualized list rendering 10,000+ items efficiently
// ACCEPTANCE CRITERIA:
// - Generate 10,000+ items
// - Only render visible items (windowing)
// - Smooth scrolling performance
// - Fixed-height rows
// - Scroll position maintained
// - No third-party virtualization library

export default function VirtualizedList() {
  return (
    <ExerciseShell
      title="Virtualized List"
      description="Render large lists efficiently with windowing."
    >
      <p>TODO: Implement virtualized list</p>
    </ExerciseShell>
  );
}
