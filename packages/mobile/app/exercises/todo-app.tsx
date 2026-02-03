import { Text } from "react-native";
import { Stack } from "expo-router";
import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a full-featured Todo app with proper architecture
// ACCEPTANCE CRITERIA:
// - Add new todos with text input
// - Toggle todo completion
// - Delete todos
// - Filter: All / Active / Completed
// - useReducer for todo state management
// - Proper TypeScript types for Todo, Action, State
// - Items count display

export default function TodoApp() {
  return (
    <>
      <Stack.Screen options={{ title: "Todo App" }} />
      <ExerciseShell
        title="Todo App"
        description="CRUD operations with useReducer and full architecture."
      >
        <Text>TODO: Implement todo app exercise</Text>
      </ExerciseShell>
    </>
  );
}
