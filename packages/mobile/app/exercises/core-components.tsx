import { Text } from "react-native";
import { Stack } from "expo-router";
import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Practice core React Native components
// ACCEPTANCE CRITERIA:
// - Use View for layout containers
// - Use Text for styled text content
// - Use Image to display local and remote images
// - Use ScrollView for scrollable content
// - Use Pressable for interactive elements with press feedback

export default function CoreComponents() {
  return (
    <>
      <Stack.Screen options={{ title: "Core Components" }} />
      <ExerciseShell
        title="Core Components"
        description="Practice View, Text, Image, ScrollView, and Pressable."
      >
        <Text>TODO: Implement core components exercise</Text>
      </ExerciseShell>
    </>
  );
}
