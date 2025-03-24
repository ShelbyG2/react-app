# Student Component

## Concepts Learned

1. **Basic Components in React**:

   - Creating a functional component
   - Returning JSX elements

2. **Props in React**:

   - Receiving and using props from parent components
   - Accessing props properties (name, age, isStudent)

3. **Conditional Rendering**:

   - Using the ternary operator to conditionally render text based on a boolean prop
   - Example: `{props.isStudent ? "Yes" : "No"}`

4. **Component Export**:
   - Exporting a component to be used in other parts of the application

## Code Structure

```jsx
function Student(props) {
  return (
    <div className="student">
      <h2>Students Data</h2>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
export default Student;
```

## Usage Example

```jsx
// In a parent component
<Student name="John Doe" age={21} isStudent={true} />
```

## Learning Outcomes

- Understanding how to pass and use data in React components
- Learning the basics of JSX structure
- Working with props to create reusable components
- Using conditional rendering based on prop values
