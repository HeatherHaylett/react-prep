import { ExerciseShell } from "../../components/ExerciseShell";
import { useFetch } from "./useFetch";

// GOAL: Build a custom useFetch hook
// ACCEPTANCE CRITERIA:
// - Generic useFetch<T>(url) hook
// - Returns { data, error, loading } (LoadingState pattern)
// - AbortController for request cancellation
// - Refetch capability
// - Cleanup on unmount
// - Demo component that uses the hook

interface Todo {
  id: number,
  title: string,
  completed: boolean
}

export default function UseFetchHook() {

  const { data, loading, error } = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/posts");

  return (
    <ExerciseShell
      title="useFetch Hook"
      description="Custom data-fetching hook with loading and error states."
    >
      <div>
        {loading && "loading..."}
        {error && <p>{error.message}</p>}
        {data && data.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
    </ExerciseShell>
  );
}
