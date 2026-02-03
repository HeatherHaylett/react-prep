import { type ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { exercises } from "../data/exercises";

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <nav
        style={{
          width: 240,
          padding: "1rem",
          borderRight: "1px solid #e0e0e0",
          overflowY: "auto",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2 style={{ margin: "0 0 1rem" }}>React Prep</h2>
        </Link>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {exercises.map((ex) => (
            <li key={ex.id} style={{ marginBottom: "0.25rem" }}>
              <Link
                to={ex.route}
                style={{
                  display: "block",
                  padding: "0.5rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  color: "inherit",
                  backgroundColor:
                    location.pathname === ex.route ? "#e8f0fe" : "transparent",
                }}
              >
                {ex.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
    </div>
  );
}
