import React , {useState}from "react";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key = {task.id}
            style = {{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type = "checkbox"
              checked = {task.completed}
              onChange = {() => toggleTask(task.id)}
            />
            {task.name}
            <button className="editButton">EDIT</button>
            <button className="deleteButton" onClick = {() => deleteTask(task.id)}>X</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;