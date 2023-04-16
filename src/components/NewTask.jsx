import React, { useState } from "react";
import TaskList from "./TaskList";
import EveryDayTasks  from "./DailyTasks";
import "./NewTask.css";

const NewTask = () => {
  const [tasks, setTasks] = useState(EveryDayTasks);
  const [textVar, setTextVar] = useState("");

  const addingTask = () => {
    if (textVar.trim() !== "") {
      setTasks([
        ...tasks,
        {
          name: textVar.trim(),
          id: new Date().getTime(),
        },
      ]);
      setTextVar("");
    }
  };

  const todaysDate = new Date().toLocaleDateString();

  return (
    <div className="task-list-container">
      <h2 className="new-task-heading">Tasks for {todaysDate}</h2>
      <TaskList tasks={tasks} />
      <div className="new-task-form">
        <input
          placeholder="Add Task"
          value={textVar}
          onChange={(e) => setTextVar(e.target.value)}
        />
        <button className="new-task-button" onClick={addingTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;
