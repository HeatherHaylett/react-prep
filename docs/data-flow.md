# Data Flow

## Overview

Document how data flows through components in each exercise.

## Patterns

### Props Drilling
- When acceptable:
- When to avoid:

### Context API
- When to use:
- Trade-offs:

### Callback Props
- Patterns:
- Naming conventions:

## Exercise Notes

### Exercise: [Name]

**Data flow diagram:**
```
[Source] → [Component A] → [Component B]
                        ↘ [Component C]
```

**Key observations:**
-
-

### Excercise: Timer
- No props drilling, all state is local
- start state drives the useEffect, which updates time

### Excercise: Stopwatch

```
Stopwatch → LapList
```

- Local state
- useEffect checks if start has changed to start or stop interval
- LapList takes an array of laps to display
