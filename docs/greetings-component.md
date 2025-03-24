# Greetings Component

## Concepts Learned

1. **Conditional Rendering in React**:

   - Using ternary operators to conditionally render different UI elements
   - Making UI decisions based on props values

2. **JSX Variables**:

   - Creating JSX elements and storing them in variables
   - Reusing JSX elements within the component

3. **Props in Functional Components**:

   - Receiving and using props in an arrow function component
   - Accessing props to determine what to render

4. **Component Logic Separation**:
   - Keeping component logic clean by using variables for UI elements
   - Simplifying the return statement with conditional expressions

## Code Structure

```jsx
const Greetings = (props) => {
  const greetingMessage = <h2>Welcome {props.username}</h2>;
  const loginMessage = <h2>Please login to continue!</h2>;
  return props.isLoggedIn ? greetingMessage : loginMessage;
};

export default Greetings;
```

## Usage Example

```jsx
// In a parent component
<Greetings username="John" isLoggedIn={true} />
// or
<Greetings isLoggedIn={false} />
```

## Learning Outcomes

- Understanding how to conditionally render UI elements based on props
- Learning to create and use JSX variables
- Implementing simple authentication display logic
- Creating clean, focused components that follow single responsibility principle
- Using the ternary operator for concise conditional rendering
