import { Text } from "react-native";
import { Stack } from "expo-router";
import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a Twitter-like feed with system design focus
// ACCEPTANCE CRITERIA:
// - FlatList-based tweet feed
// - Infinite scroll with onEndReached
// - Pull-to-refresh for new tweets
// - Tweet component with avatar, name, handle, content, timestamp
// - Loading indicator at bottom during fetch
// - Mock data generator for tweets

export default function TwitterFeed() {
  return (
    <>
      <Stack.Screen options={{ title: "Twitter Feed" }} />
      <ExerciseShell
        title="Twitter Feed"
        description="Infinite scroll and pull-to-refresh system design."
      >
        <Text>TODO: Implement Twitter feed exercise</Text>
      </ExerciseShell>
    </>
  );
}
