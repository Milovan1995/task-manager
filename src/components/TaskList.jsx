import React, {useState} from "react";

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
// 2 useState to control which task is being Edited and if its being edited, and what to
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");

  const handleEdit = (taskId, taskName) => {
    setEditingTaskId(taskId);
    setEditedTaskName(taskName);
  };

  const handleSave = (taskId) => {
    editTask(taskId, editedTaskName);
    setEditingTaskId(null);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={editedTaskName}
                  onChange={(e) => setEditedTaskName(e.target.value)}
                />
                <button className = "editButton" onClick={() => handleSave(task.id)}>Save</button>
              </div>
            ) : (
              <div>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.name}
                </span>
                <button className = "editButton" onClick={() => handleEdit(task.id, task.name)}>Edit</button>
                <button className = "deleteButton" onClick = {() => deleteTask(task.id)}>X</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;