import { exercises } from "../data/exercises";
import { ExerciseCard } from "../components/ExerciseCard";

export function Home() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>React Prep Exercises</h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        Choose an exercise to practice. Each one includes goals and acceptance
        criteria.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
