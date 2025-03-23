import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([
    "Walk the dog",
    "Wash utensils",
    "Clean utensils",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  };

  const moveTaskDown = (index) => {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">To Do List</h2>
      <ol className="list-decimal pl-5 space-y-2">
        {task.map((task, index) => (
          <li key={index} className="flex items-center justify-between">
            <span>{task}</span>
            <div className="space-x-2">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </button>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => moveTaskUp(index)}
              >
                <i className="fa-solid fa-arrow-up"></i>
              </button>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => moveTaskDown(index)}
              >
                <i className="fa-solid fa-arrow-down"></i>
              </button>
            </div>
          </li>
        ))}
      </ol>
      <div className="flex items-center space-x-2">
        <div className="relative flex-grow">
          <i className="fa fa-tasks absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            id="task-input"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default ToDoList;
