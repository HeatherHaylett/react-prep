# React Preparation Monorepo

Practice exercises for React (web) and React Native (mobile) interview preparation.

## Quick Start

```bash
nvm use           # Node 20.11.1
yarn install      # Install all dependencies
yarn web          # Start web exercises (Vite dev server)
yarn mobile       # Start mobile exercises (Expo)
yarn typecheck    # Type-check all packages
yarn lint         # Lint all packages
```

## How to Practice

### Workflow

1. **Pick an exercise** from the tables below. Start with beginner, work up to advanced.
2. **Read the README** in the exercise directory (e.g. `packages/web/src/exercises/tic-tac-toe/README.md`). It lists the goals and acceptance criteria.
3. **Read the component file** — each placeholder has comments describing exactly what to build.
4. **Implement it** in the placeholder component. The dev server hot-reloads, so you'll see changes instantly at the exercise's route.
5. **Check the boxes** in the exercise README as you complete each acceptance criterion.
6. **Fill in the docs** — after finishing an exercise, jot down what you learned in the relevant `docs/` file (state management decisions, performance techniques, TypeScript patterns, etc.). This builds your own reference sheet for interviews.
7. **Mark the Status column** in this README with a checkmark when done.

### Suggested Order

**Round 1 — Fundamentals & warm-up:**
Tic-Tac-Toe → Timer → TS Conversion → Form Wizard

**Round 2 — Hooks & custom hooks:**
Stopwatch → Debounced Search → useFetch Hook → Modal Manager

**Round 3 — Performance:**
Slow Component Opt. → Searchable List → Virtualized List

**Round 4 — Advanced / system design:**
Kanban Board → (then mobile exercises)

Mobile exercises can be done in parallel or after web — they reinforce the same concepts in a React Native context.

### Tips

- **Time yourself.** Interview coding rounds are typically 30–45 minutes. Practice under that constraint.
- **Talk out loud.** Narrate your decisions as you code — component breakdown, state shape, tradeoffs. This is what interviewers want to hear.
- **Don't peek at solutions first.** Struggle with it, then review afterward. The struggle is where learning happens.
- **Use the docs/ templates.** Writing down your component hierarchy, state shape, and data flow forces you to think clearly — exactly what you'll need to do on a whiteboard.
- **Revisit exercises.** Try redoing earlier ones from scratch to test retention.

## Packages

| Package | Description |
|---------|-------------|
| `@react-prep/web` | Vite 6 + React 19 + TypeScript + React Router v7 |
| `@react-prep/mobile` | Expo SDK 54 + TypeScript + Expo Router |
| `@react-prep/shared` | Shared types and utilities |

## Web Exercises

| # | Exercise | Route | Category | Difficulty | Status |
|---|----------|-------|----------|------------|--------|
| 01 | Tic-Tac-Toe | `/tic-tac-toe` | fundamentals | beginner | |
| 02 | Timer | `/timer` | fundamentals | beginner | |
| 03 | Stopwatch with Laps | `/stopwatch` | hooks | intermediate | |
| 04 | Debounced Search | `/debounced-search` | hooks | intermediate | |
| 05 | Virtualized List | `/virtualized-list` | performance | advanced | |
| 06 | Form Wizard | `/form-wizard` | fundamentals | intermediate | |
| 07 | useFetch Hook | `/use-fetch-hook` | hooks | intermediate | |
| 08 | Slow Component Opt. | `/slow-component` | performance | intermediate | |
| 09 | Kanban Board | `/kanban-board` | typescript | advanced | |
| 10 | Modal Manager | `/modal-manager` | hooks | advanced | |
| 11 | Searchable List | `/searchable-list` | performance | intermediate | |
| 12 | TS Conversion | `/ts-conversion` | typescript | beginner | |

## Mobile Exercises

| # | Screen | Focus | Status |
|---|--------|-------|--------|
| 01 | Core Components | View, Text, Image, ScrollView, Pressable | |
| 02 | FlatList | keyExtractor, renderItem, performance | |
| 03 | State Patterns | useState vs useContext vs useReducer | |
| 04 | Twitter Feed | Infinite scroll, pull-to-refresh | |
| 05 | Todo App | CRUD, useReducer, full architecture | |

## Docs

Design documents for study and review live in [`docs/`](./docs/). Fill these in as you complete exercises to build your own interview reference:

| Doc | What to capture |
|-----|-----------------|
| [Component Hierarchy](docs/component-hierarchy.md) | Component trees, prop flow, composition decisions |
| [State Management](docs/state-management.md) | When to use useState vs useReducer vs useContext |
| [Data Flow](docs/data-flow.md) | Props drilling, callbacks, context patterns |
| [Performance](docs/performance.md) | memo, useMemo, useCallback, virtualization |
| [TypeScript Patterns](docs/types.md) | Discriminated unions, generics, utility types |
| [Exercise Index](docs/exercise-index.md) | Quick reference and key takeaways per exercise |
