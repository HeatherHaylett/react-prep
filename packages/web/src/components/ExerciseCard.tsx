import { Link } from "react-router";
import type { ExerciseMeta } from "@react-prep/shared";

const difficultyColors: Record<string, string> = {
  beginner: "#4caf50",
  intermediate: "#ff9800",
  advanced: "#f44336",
};

export function ExerciseCard({ exercise }: { exercise: ExerciseMeta }) {
  return (
    <Link
      to={exercise.route}
      style={{
        display: "block",
        padding: "1rem",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>{exercise.title}</h3>
      <p style={{ margin: "0 0 0.5rem", color: "#666", fontSize: 14 }}>
        {exercise.description}
      </p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <span
          style={{
            fontSize: 12,
            padding: "2px 8px",
            borderRadius: 4,
            backgroundColor: "#f0f0f0",
          }}
        >
          {exercise.category}
        </span>
        <span
          style={{
            fontSize: 12,
            padding: "2px 8px",
            borderRadius: 4,
            color: "#fff",
            backgroundColor: difficultyColors[exercise.difficulty],
          }}
        >
          {exercise.difficulty}
        </span>
      </div>
    </Link>
  );
}
