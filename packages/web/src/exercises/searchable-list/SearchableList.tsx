import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a searchable/filterable list with React 19 APIs
// ACCEPTANCE CRITERIA:
// - Large list of items (1000+)
// - Search input filters items
// - useDeferredValue for non-blocking filtering
// - useTransition for pending states
// - Visual feedback during filtering
// - Category filter chips

export default function SearchableList() {
  return (
    <ExerciseShell
      title="Searchable List"
      description="Filterable list with deferred values and transitions."
    >
      <p>TODO: Implement searchable list</p>
    </ExerciseShell>
  );
}
