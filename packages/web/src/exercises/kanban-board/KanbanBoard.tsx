import { ExerciseShell } from "../../components/ExerciseShell";

// GOAL: Build a kanban board with drag-and-drop
// ACCEPTANCE CRITERIA:
// - Multiple columns (Todo, In Progress, Done)
// - Cards with title and description
// - Drag cards between columns
// - Add new cards
// - Delete cards
// - Strong TypeScript types for board state
// - useReducer for complex state management

export default function KanbanBoard() {
  return (
    <ExerciseShell
      title="Kanban Board"
      description="Drag-and-drop kanban board with TypeScript."
    >
      <p>TODO: Implement kanban board</p>
    </ExerciseShell>
  );
}
