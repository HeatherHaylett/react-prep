import { Text } from "react-native";
import { Stack } from "expo-router";
import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Compare state management patterns in React Native
// ACCEPTANCE CRITERIA:
// - useState: simple counter and toggle examples
// - useReducer: complex state with actions (e.g., shopping cart)
// - useContext: theme or auth context shared across components
// - Side-by-side comparison of approaches
// - Explain trade-offs for each pattern

export default function StatePatterns() {
  return (
    <>
      <Stack.Screen options={{ title: "State Patterns" }} />
      <ExerciseShell
        title="State Patterns"
        description="Compare useState, useContext, and useReducer."
      >
        <Text>TODO: Implement state patterns exercise</Text>
      </ExerciseShell>
    </>
  );
}
