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

### Excercise: FormWizard

```
FormWizard → Form
          ↘ Review
```

- Form takes local state profile and input calls onChange while setting new profile
- onSubmit will call handleNext which changes local state step
- Review takes the profile and displays data, onReset will change all local state back to initial values

### Excercise: DebouncedSearch

```
keystroke → query → (debounce 1000ms) → newSearch → useEffect → getCharacter → charList
```

- Input takes key stroke event and sets query to event.target.value
- useDebounce is called on every render with query and a delay (1000ms), returning newSearch
- useEffect looks for changes in newSearch and sets characterList after debounce processes