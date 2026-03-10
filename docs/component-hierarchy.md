# Component Hierarchy

## Overview

Document the component tree for each exercise as you build it.

## Template

### Exercise: [Name]

```
App
├── Layout
│   ├── Sidebar
│   └── Main
│       └── [ExerciseComponent]
│           ├── ...
│           └── ...
```

**Key decisions:**
-
-

**Props flow:**
-
-

### Excercise: Timer

```
  ExerciseShell
  └── Timer (display + 3 buttons)
```

### Excercise: Stopwatch

```
  ExerciseShell
  └── Stopwatch (display + 2 buttons)
    └── LapList
```

### Excercise: FormWizard

```
  ExerciseShell
  └── FormWizard (form or review, 3 buttons)
    └── Form
    └── Review
```

### Excercise: Debounced Search

```
  ExerciseShell
  └── Input
  └── Search result list
```