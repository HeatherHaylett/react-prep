import { FlatList, StyleSheet, View, Text } from "react-native";
import type { ExerciseMeta } from "@react-prep/shared";
import { ExerciseListItem } from "../components/ExerciseListItem";

const exercises: ExerciseMeta[] = [
  {
    id: "m01-core-components",
    title: "Core Components",
    route: "/exercises/core-components",
    category: "fundamentals",
    difficulty: "beginner",
    platform: "mobile",
    description: "View, Text, Image, ScrollView, Pressable",
    goals: ["Learn core RN components", "Styling basics", "Pressable interactions"],
  },
  {
    id: "m02-flat-list",
    title: "FlatList",
    route: "/exercises/flat-list",
    category: "performance",
    difficulty: "intermediate",
    platform: "mobile",
    description: "keyExtractor, renderItem, performance",
    goals: ["FlatList API", "Efficient rendering", "Scroll performance"],
  },
  {
    id: "m03-state-patterns",
    title: "State Patterns",
    route: "/exercises/state-patterns",
    category: "hooks",
    difficulty: "intermediate",
    platform: "mobile",
    description: "useState vs useContext vs useReducer",
    goals: ["Compare state approaches", "Context in RN", "useReducer patterns"],
  },
  {
    id: "m04-twitter-feed",
    title: "Twitter Feed",
    route: "/exercises/twitter-feed",
    category: "fundamentals",
    difficulty: "advanced",
    platform: "mobile",
    description: "Infinite scroll, pull-to-refresh",
    goals: ["Infinite scroll", "Pull-to-refresh", "System design"],
  },
  {
    id: "m05-todo-app",
    title: "Todo App",
    route: "/exercises/todo-app",
    category: "fundamentals",
    difficulty: "advanced",
    platform: "mobile",
    description: "CRUD, useReducer, full architecture",
    goals: ["CRUD operations", "useReducer", "Full mobile architecture"],
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Mobile Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExerciseListItem exercise={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  list: {
    paddingBottom: 24,
  },
});
