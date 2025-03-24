# React useEffect Hook - Quick Reference

## Basic Syntax

```jsx
useEffect(() => {
  // Effect code runs after render

  return () => {
    // Cleanup code runs before next effect or unmount
  };
}, [dependencies]); // Only re-run if dependencies change
```

## Core Concepts

- **Purpose**: Perform side effects in function components
- **When it runs**: After render is committed to the screen
- **Dependencies array**:
  - `[]` - Run once after initial render only
  - `[value1, value2]` - Run when any dependency changes
  - Omitted - Run after every render

## Common Use Cases

### Data Fetching

```jsx
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [url]); // Re-fetch when URL changes
```

### Event Listeners

```jsx
useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);

  // Cleanup to prevent memory leaks
  return () => window.removeEventListener("resize", handleResize);
}, []); // Empty array = run once
```

### Subscriptions

```jsx
useEffect(() => {
  const subscription = someService.subscribe();

  return () => {
    subscription.unsubscribe();
  };
}, [someService]);
```

### DOM Mutations

```jsx
useEffect(() => {
  // Update document title
  document.title = `${count} new messages`;
}, [count]);
```

## Best Practices

1. **Include all dependencies**: Include all values from component scope that change and are used by the effect
2. **Use multiple effects**: Separate concerns into different useEffect calls

3. **Avoid infinite loops**: Ensure dependency arrays are properly configured

4. **Always clean up**: Return a cleanup function when creating timers, subscriptions, or event listeners

5. **Async handling**: Define async functions inside useEffect, don't make the effect function itself async

## Common Mistakes

- Missing dependencies
- Unnecessary dependencies
- Direct mutation of state in effects
- Forgetting cleanup functions
- Depending on objects or functions that are recreated every render

## Advanced Patterns

### Skip first render

```jsx
const isFirstRender = useRef(true);

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }

  // Effect code that skips first render
}, [dependency]);
```

### Debouncing effects

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    // Debounced code here
  }, 500);

  return () => clearTimeout(timer);
}, [searchTerm]);
```
