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

### Error handling
Avoid typing caught errors as `any`. In TypeScript, caught errors are `unknown` by default — narrow them before accessing properties:

\`\`\`ts
catch (err) {
  setError(err instanceof Error ? err.message : "Something went wrong")
}
\`\`\`

**Why:** `err instanceof Error` narrows the type so TypeScript knows `.message` is safe to access. Typing as `any` bypasses this check and loses type safety.

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

### Exercise: DebouncedSearch

**Types defined:**
- Minimal object type for `type Character` types actually used in UI

**Lesson learned:**
- `useRef<AbortController | null>` for AbortController props

### Exercise: UseFetchHook

**Types defined:**
- Return type alias for `type LoadingState`

**Lesson learned:**
- `<T,>` passes a type into the hook to make it generic. The trailing comma is required in `.tsx` files because `<T>` alone is ambiguous with JSX syntax.



