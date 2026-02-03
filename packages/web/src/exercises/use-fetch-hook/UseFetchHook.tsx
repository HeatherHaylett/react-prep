import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a custom useFetch hook
// ACCEPTANCE CRITERIA:
// - Generic useFetch<T>(url) hook
// - Returns { data, error, loading } (LoadingState pattern)
// - AbortController for request cancellation
// - Refetch capability
// - Cleanup on unmount
// - Demo component that uses the hook

export default function UseFetchHook() {
  return (
    <ExerciseShell
      title="useFetch Hook"
      description="Custom data-fetching hook with loading and error states."
    >
      <p>TODO: Implement useFetch hook</p>
    </ExerciseShell>
  );
}
