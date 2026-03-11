# State Management

## Overview

Document state management decisions for each exercise.

## Patterns

### useState
- When to use:
- Examples:

### useReducer
- When to use:
- Examples:

### useContext
- When to use:
- Examples:

### Lifting State Up
- When to use:
- Examples:

## Exercise Notes

### Exercise: [Name]

**State shape:**
```ts
// Define your state type here
```

**Why this pattern:**
-
-

### Excercise: Timer

**State shape:**
```ts
time: number (centiseconds), 
start: boolean
```

**Why this pattern:**
- useState is sufficient because we are not dependent on outside data
- Interval ID is in useRef because it is not needed for rerending, useState would cause unnecessary rerenders.

### Excercise: Stopwatch
```ts
time: number (centiseconds), 
start: boolean
laps: number[]
```

**Why this pattern:**
- useState is sufficient because we are not dependent on outside data
- Interval ID is in useRef because it is not needed for rerending, useState would cause unnecessary rerenders.
- laps is an array of numbers

### Excercise: FormWizard
```ts
type Step = "personal" | "address" | "review";
type Status = "typing" | "complete";
interface Profile {
  userName: string,
  address: string,
}
interface FormProps {
  label: string,
  name: string,
  value: string,
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
interface ReviewProps {
  profile: Profile,
  setStatus: React.Dispatch<React.SetStateAction<Status>>
}
const stepComponents: Record<Step, () => React.ReactNode>
const stepState: Record<Step, { next: Step | null; prev: Step | null }>
```

**Why this pattern:**
- Union types for Step and Status make invalid states unrepresentable — the compiler won't let you set step to an arbitrary string. The stepState record then maps each valid step to its navigation options, so the transition logic is data-driven rather than scattered across conditionals. This is a lightweight state machine: states are enumerated, transitions are explicit, and the UI derives entirely from current state.

### Excercise: DebouncedSearch

```ts
type Character = {
  id: number
  name: string
}
```

**Why this pattern:**
- Character is a minimal object type — only typing the fields actually used in the UI rather than the full API response
- Character[] ensures characterList valid only with an array of objects that contain those properties
- useState is sufficient for all state because there is no shared global state

### Exercise: UseFetchHook

```ts
type LoadingState<T> = {
    data: T | null,
    loading: boolean,
    error: Error | null,
    refetch: () => void
}
```

**Why this pattern:**
- LoadingState is a return type alias that accepts a generic type from the argument passed to useFetch hook
- useState is sufficient for all state because there is no shared global state
- useRef holds the AbortController because it needs to persist across renders but changing it should not trigger a rerender