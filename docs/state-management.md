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