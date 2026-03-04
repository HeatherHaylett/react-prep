# TypeScript Patterns

## Overview

Document TypeScript patterns used across exercises.

## Patterns

### Discriminated Unions
```ts
// Example: LoadingState<T>
```

### Generic Components
```ts
// Example: reusable list component
```

### Type Narrowing
```ts
// Example: event handlers, API responses
```
- Accessing a value typed as T | null from a Record requires a truthiness check before use. TypeScript narrows the type inside the if block, allowing it to be passed where T is expected.

### Utility Types
- `Partial<T>`:
- `Pick<T, K>`:
- `Omit<T, K>`:
- `Record<K, V>`: Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

## Exercise Notes

### Exercise: [Name]

**Types defined:**
-

**Pattern used:**
-

**Lesson learned:**
-

### Exercise: FormWizard

 **Types defined:**
- Union types for constrained state: `type Step = "personal" | "address" | "review"`
- `Record<Step, ...>` for step navigation map and component map

**Pattern used:**
- Lightweight state machine — union type enumerates valid states, Record maps transitions

**Lesson learned:**
- `React.FormEventHandler<HTMLFormElement>` for onSubmit props
- `React.Dispatch<React.SetStateAction<T>>` for passing state setters as props
- Keys on components force remount when swapping between same component type at same position
