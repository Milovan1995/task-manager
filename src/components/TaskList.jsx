import React from "react";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

