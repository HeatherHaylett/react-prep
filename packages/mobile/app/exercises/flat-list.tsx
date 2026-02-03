import { Text } from "react-native";
import { Stack } from "expo-router";
import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Master FlatList for efficient list rendering
// ACCEPTANCE CRITERIA:
// - Render a list of 100+ items using FlatList
// - Proper keyExtractor implementation
// - Custom renderItem component
// - Separator between items
// - Pull-to-refresh
// - Performance: no unnecessary re-renders

export default function FlatListExercise() {
  return (
    <>
      <Stack.Screen options={{ title: "FlatList" }} />
      <ExerciseShell
        title="FlatList"
        description="keyExtractor, renderItem, and performance optimization."
      >
        <Text>TODO: Implement FlatList exercise</Text>
      </ExerciseShell>
    </>
  );
}
