import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import type { ExerciseMeta } from "@react-prep/shared";

const difficultyColors: Record<string, string> = {
  beginner: "#4caf50",
  intermediate: "#ff9800",
  advanced: "#f44336",
};

export function ExerciseListItem({ exercise }: { exercise: ExerciseMeta }) {
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => router.push(exercise.route as never)}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{exercise.title}</Text>
        <Text style={styles.description}>{exercise.description}</Text>
        <View style={styles.tags}>
          <View style={styles.categoryTag}>
            <Text style={styles.categoryText}>{exercise.category}</Text>
          </View>
          <View
            style={[
              styles.difficultyTag,
              { backgroundColor: difficultyColors[exercise.difficulty] },
            ]}
          >
            <Text style={styles.difficultyText}>{exercise.difficulty}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 6,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  pressed: {
    backgroundColor: "#f5f5f5",
  },
  content: {
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  tags: {
    flexDirection: "row",
    gap: 8,
  },
  categoryTag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 12,
    color: "#333",
  },
  difficultyTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  difficultyText: {
    fontSize: 12,
    color: "#fff",
  },
});
