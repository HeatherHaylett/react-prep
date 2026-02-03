import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Optimize a deliberately slow component
// ACCEPTANCE CRITERIA:
// - Start with an intentionally slow component (heavy computation in render)
// - Identify performance bottleneck
// - Apply React.memo where appropriate
// - Use useMemo for expensive calculations
// - Use useCallback for callback props
// - Demonstrate before/after performance difference

export default function SlowComponent() {
  return (
    <ExerciseShell
      title="Slow Component Optimization"
      description="Optimize a deliberately slow component."
    >
      <p>TODO: Implement slow component optimization</p>
    </ExerciseShell>
  );
}
