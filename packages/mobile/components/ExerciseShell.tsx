import { type ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface ExerciseShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function ExerciseShell({
  title,
  description,
  children,
}: ExerciseShellProps) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.body}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  body: {
    flex: 1,
  },
});
