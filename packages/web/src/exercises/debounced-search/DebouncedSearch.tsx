import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a search input with debounced API calls
// ACCEPTANCE CRITERIA:
// - Text input for search query
// - Debounce search with custom useDebounce hook
// - Display loading state while searching
// - Show search results
// - Cancel pending searches on new input
// - Handle errors gracefully

export default function DebouncedSearch() {
  return (
    <ExerciseShell
      title="Debounced Search"
      description="Search input with debounced API calls."
    >
      <p>TODO: Implement debounced search</p>
    </ExerciseShell>
  );
}
