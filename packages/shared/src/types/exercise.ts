export type ExerciseCategory =
  | "fundamentals"
  | "hooks"
  | "performance"
  | "typescript";

export type ExerciseDifficulty = "beginner" | "intermediate" | "advanced";

export type ExercisePlatform = "web" | "mobile";

export interface ExerciseMeta {
  id: string;
  title: string;
  route: string;
  category: ExerciseCategory;
  difficulty: ExerciseDifficulty;
  platform: ExercisePlatform;
  description: string;
  goals: string[];
}
