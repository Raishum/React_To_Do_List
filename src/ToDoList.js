// Import React and the useState hook so we can manage component state
import React, { useState } from "react";

// Define the main ToDoList component
function ToDoList() {

  // This state holds the list of tasks
  const [task, setTask] = useState([
    "Eat Breakfast", 
    "Take a shower", 
    "Walk the dog"
  ]);

  // This state holds the current text entered in the input field
  const [newTask, setNewTask] = useState("");

  // This function runs whenever the user types in the input box
  function handleInputChange(event) {
    setNewTask(event.target.value); // Updates newTask with the typed-in value
  }

  // This function adds a new task to the list
  function addTask() {
    // Check if the input is not just spaces or empty
    if (newTask.trim() !== "") {
      // Add the new task to the end of the current task array
      setTask(t => [...t, newTask]);
      // Clear the input box after adding
      setNewTask("");
    }
  }

  // This function deletes a task by its index (position in the array)
  function deleteTask(index) {
    // Filter out the task at the given index
    const updatedTask = task.filter((_, i) => i !== index);
    // Update the task list
    setTask(updatedTask);
  }

  // This function moves a task up in the list by swapping it with the one above
  function MoveTaskUp(index) {
    // Only move if it's not already the first task
    if (index > 0) {
      const updatedTask = [...task]; // Make a copy of the task list
      // Swap current task with the one above it
      [updatedTask[index], updatedTask[index - 1]] = 
        [updatedTask[index - 1], updatedTask[index]];
      setTask(updatedTask); // Update the list
    }
  }

  // This function moves a task down by swapping it with the one below
  function MoveTaskdown(index) {
    // Only move if it's not already the last task
    if (index < task.length - 1) {
      const updatedTask = [...task]; // Copy of the list
      // Swap current task with the one below it
      [updatedTask[index], updatedTask[index + 1]] = 
        [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask); // Update the list
    }
  }

  // Return the UI
  return (
    <div className="to-do-list">
      {/* App title */}
      <h1>To-Do-List</h1>

      {/* Input section for adding tasks */}
      <div>
        <input
          type="text"                        // It's a text box
          placeholder="Enter a Task..."     // Placeholder text inside the box
          value={newTask}                   // Binds to the newTask state
          onChange={handleInputChange}      // Updates newTask as the user types
        />

        <button
          className="add-button"
          onClick={addTask}                 // When clicked, calls addTask()
        >
          Add
        </button>
      </div>

      {/* List of tasks displayed as an ordered list */}
      <ol className="button1">
        {task.map((task, index) => 
          // Render each task as a list item
          <li key={index}>
            <span className="text">{task}</span>

            {/* Button to delete this task */}
            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

            {/* Button to move this task up */}
            <button
              className="Move-button"
              onClick={() => MoveTaskUp(index)}
            >
              Up
            </button>

            {/* Button to move this task down */}
            <button
              className="down-button"
              onClick={() => MoveTaskdown(index)}
            >
              Down
            </button>
          </li>
        )}
      </ol>
    </div>
  );
}

// Export the component so it can be used in other parts of the app
export default ToDoList;
