import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f5f5f5" },
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "React Prep" }} />
      <Stack.Screen name="exercises" options={{ headerShown: false }} />
    </Stack>
  );
}
