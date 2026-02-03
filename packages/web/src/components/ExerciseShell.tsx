import { type ReactNode } from "react";
import { Link } from "react-router";

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
    <div>
      <Link to="/" style={{ fontSize: 14, color: "#666" }}>
        &larr; Back to exercises
      </Link>
      <h1 style={{ margin: "0.5rem 0" }}>{title}</h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>{description}</p>
      <div>{children}</div>
    </div>
  );
}
