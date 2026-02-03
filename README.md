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

Design documents for study and review live in [`docs/`](./docs/).
