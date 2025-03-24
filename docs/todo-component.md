# Todo Component

## Concepts Learned

1. **State Management with useState Hook**:

   - Using the useState hook for task list management
   - Updating state arrays properly in React

2. **Form Handling in React**:

   - Using controlled inputs
   - Managing input field state

3. **Event Handling**:

   - Handling form submission
   - Click event handling for task completion

4. **Array Operations in React**:

   - Mapping arrays to React elements
   - Filtering arrays for state updates

5. **Conditional Styling**:
   - Adding dynamic CSS classes based on task state
   - Implementing basic task completion styling

## Detailed Code Explanation

```jsx
import React, { useState } from "react";

function Todo() {
  // State for the list of todo items
  const [todos, setTodos] = useState([]);

  // State for the current input value
  const [newTodo, setNewTodo] = useState("");

  // Event handler for input field changes
  const handleInputChange = (event) => {
    // Update the newTodo state with the current input value
    setNewTodo(event.target.value);
  };

  // Event handler for form submission
  const handleFormSubmit = (event) => {
    // Prevent default form submission behavior (page reload)
    event.preventDefault();

    // Only add the task if it's not empty (after trimming whitespace)
    if (newTodo.trim() !== "") {
      // Create a new todo object with text and completed properties
      const todo = {
        text: newTodo,
        completed: false,
      };

      // Update todos state by adding the new todo to the existing array
      setTodos([...todos, todo]);

      // Clear the input field
      setNewTodo("");
    }
  };

  // Event handler for toggling a task's completion status
  const toggleComplete = (index) => {
    // Create a copy of the todos array
    const newTodos = [...todos];

    // Toggle the completed status of the todo at the given index
    newTodos[index].completed = !newTodos[index].completed;

    // Update the todos state with the modified array
    setTodos(newTodos);
  };

  // Event handler for removing a task
  const removeTodo = (index) => {
    // Filter out the todo at the specified index
    const newTodos = todos.filter((_, i) => i !== index);

    // Update the todos state with the filtered array
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      {/* Form for adding new tasks */}
      <form onSubmit={handleFormSubmit}>
        {/* Input field for new task text */}
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        {/* Submit button to add the task */}
        <button type="submit">Add</button>
      </form>

      {/* List of todo items */}
      <ul className="todo-list">
        {/* Map through the todos array to create list items */}
        {todos.map((todo, index) => (
          <li
            key={index}
            // Apply completed class conditionally based on todo.completed
            className={todo.completed ? "completed" : ""}
          >
            {/* Task text */}
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>

            {/* Remove button */}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
```

## Control Flow Structure

```
┌─────────────────────────┐
│ Component Initialization│
│ - Import React, useState│
│ - Define Todo Component │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ State Initialization    │
│ - todos: []             │
│ - newTodo: ""           │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Event Handler Definition│
│ - handleInputChange     │
│ - handleFormSubmit      │
│ - toggleComplete        │
│ - removeTodo            │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│ Initial Render          │
│ - Form                  │
│ - Empty todo list       │
└───────────┬─────────────┘
            │
┌───────────▼─────────────┐
│     User Interaction    │
└────┬──────┬──────┬──────┘
     │      │      │
┌────▼───┐ ┌▼────┐ ┌▼─────┐
│Type in │ │Add  │ │Task  │
│Input   │ │Task │ │Action│
└────┬───┘ └┬────┘ └┬─────┘
     │      │       │
┌────▼───┐ ┌▼────────────┐ ┌─────────┐ ┌─────────┐
│Update  │ │Validate &   │ │Toggle   │ │Remove   │
│newTodo │ │Add to todos │ │Complete │ │Task     │
└────────┘ └┬────────────┘ └────┬────┘ └────┬────┘
            │                   │           │
            └───────────┬───────┴───────────┘
                        │
┌───────────────────────▼─────┐
│ Update todos State          │
└───────────┬─────────────────┘
            │
┌───────────▼─────────────────┐
│ Component Re-renders with   │
│ Updated State               │
└─────────────────────────────┘
```

## How This Component Works

1. **Component Initialization**:

   - The component imports React and the useState hook
   - It initializes two state variables:
     - `todos`: An empty array to store todo objects
     - `newTodo`: An empty string for the input field value

2. **User Input Flow**:

   - User types in the input field → `handleInputChange` is called
   - The `newTodo` state is updated with the current input value
   - The input field reflects the current `newTodo` state (controlled component)

3. **Adding a Task**:

   - User submits the form → `handleFormSubmit` is called
   - Form submission's default behavior is prevented
   - Input validation ensures the task text is not empty
   - A new todo object is created with text and completed (false) properties
   - The new todo is added to the todos array using the spread operator
   - The input field is cleared by resetting `newTodo` to an empty string

4. **Toggling Task Completion**:

   - User clicks on a task → `toggleComplete` is called with the task's index
   - A copy of the todos array is created to maintain immutability
   - The completed status of the selected todo is toggled
   - The todos state is updated with the modified array

5. **Removing a Task**:

   - User clicks "Remove" → `removeTodo` is called with the task's index
   - The function filters out the todo at the specified index
   - The todos state is updated with the filtered array

6. **Rendering Logic**:
   - The component renders a form with an input field and submit button
   - It maps through the todos array to create list items
   - Each list item displays the task text and a remove button
   - Completed tasks receive a CSS class for styling

## Implementation Details

1. **State Management Strategy**:

   - Separate state variables for the todo list and input field
   - This separation allows independent updates and cleaner code

2. **Immutable Update Patterns**:

   - Array updates follow immutability principles using spread operators and filter
   - No direct mutation of state arrays (which would break React's reactivity)

3. **Event Delegation**:

   - Click handlers are attached to specific elements rather than using global event listeners
   - This follows React's recommended event handling pattern

4. **Form Handling**:

   - Controlled input pattern keeps the UI in sync with state
   - Form submission is handled properly with preventDefault()
   - Input validation prevents adding empty tasks

5. **Conditional Styling**:
   - The completed class is applied conditionally based on the todo's completed status
   - This demonstrates how to change the appearance based on state

## Usage Example

```jsx
// In a parent component
<Todo />
```

## Learning Outcomes

- Building an interactive component with CRUD operations
- Managing component state with useState
- Implementing proper event handling in React
- Working with array operations in a React context
- Creating a user-friendly interface for task management
- Following React best practices for state updates
- Implementing conditional styling based on state
