# Exercise Index

## Overview

Quick reference for all exercises, what they cover, and key takeaways.

## Web Exercises

### 01 - Tic-Tac-Toe
**Focus:** Component composition, state management, derived state
**Key concepts:**
-

### 02 - Timer
**Focus:** useEffect cleanup, intervals, shared utilities
**Key concepts:**
- A cleanup function is needed to stop the interval. Cleanup function runs each time before Effect runs again and when the component unmounts.
- If we don't clear the interval in the cleanup function it will continue to run after unmount causing a memory leak.

### 03 - Stopwatch with Laps
**Focus:** useRef for intervals, useCallback, lap tracking
**Key concepts:**
- useRef holds the ID for interval clearing. See above.
- LapList is a memoized component and will skip rerender if laps hasn't changed.
- Handlers handleReset and handleRecordLap implement useCallback. The latter needs time as a dependency because handleRecordLap closes over time, so time must be in the dependency array, otherwise it would always
  record 0.

### 04 - Debounced Search
**Focus:** Custom hooks, debouncing, controlled inputs
**Key concepts:**
- custom debounce hook implements useState and useEffect to set a timeout that clears if a new query is passed and debouncedValue returns after timeout completes

### 05 - Virtualized List
**Focus:** Windowing, performance optimization, large datasets
**Key concepts:**
-

### 06 - Form Wizard
**Focus:** Multi-step forms, validation, state machines
**Key concepts:**
- Step-based state management with a data structure driving navigation
- Per-step validation with disabled progression
- Form submission with onSubmit and e.preventDefault()
- Component keying to force remount on step change
- Focus management with useRef and useEffect

### 07 - useFetch Hook
**Focus:** Custom hooks, loading/error states, AbortController
**Key concepts:**
- Component uses custom useFetch hook to retrieve data
- Hook returns state to display error, loading, or data
- Refresh button to call hook again with same url
- AbortController to abort network call if subsequent request made

### 08 - Slow Component Optimization
**Focus:** React.memo, useMemo, useCallback, profiling
**Key concepts:**
-

### 09 - Kanban Board
**Focus:** Drag-and-drop, complex TypeScript, reducer patterns
**Key concepts:**
-

### 10 - Modal Manager
**Focus:** Portals, context, compound components
**Key concepts:**
-

### 11 - Searchable List
**Focus:** Filtering, useDeferredValue, transition API
**Key concepts:**
-

### 12 - TypeScript Conversion
**Focus:** Converting JS to TS, type safety, gradual adoption
**Key concepts:**
-

## Mobile Exercises

### 01 - Core Components
**Focus:** View, Text, Image, ScrollView, Pressable
**Key concepts:**
-

### 02 - FlatList
**Focus:** keyExtractor, renderItem, performance
**Key concepts:**
-

### 03 - State Patterns
**Focus:** useState vs useContext vs useReducer in RN
**Key concepts:**
-

### 04 - Twitter Feed
**Focus:** Infinite scroll, pull-to-refresh, system design
**Key concepts:**
-

### 05 - Todo App
**Focus:** CRUD, useReducer, full mobile architecture
**Key concepts:**
-
