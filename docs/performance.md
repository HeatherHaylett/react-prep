# Performance

## Overview

Document performance patterns and optimizations learned during exercises.

## Techniques

### React.memo
- When to use: If a component re-renders often with the same exact props
- When to avoid: If there is no perceptible lag when your component re-renders

### useMemo
- When to use:
- Cost of misuse:

### useCallback
- When to use: You pass it as a prop to a component wrapped in memo. You want to skip re-rendering if the value hasn’t changed.
- Relationship to React.memo: Without memo, the child re-renders anyway regardless of whether the prop reference changed.

### Virtualization
- When to use:
- Libraries:

### Code Splitting / Lazy Loading
- React.lazy + Suspense:
- Route-based splitting:

## Exercise Notes

### Exercise: [Name]

**Problem:**
-

**Optimization applied:**
-

**Measurable improvement:**
-
