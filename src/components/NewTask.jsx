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
          completed: false, // set initial completed value to false
        },
      ]);
      setTextVar("");
    }
  };
// checking and unchecking items on tasklist
  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
// deleting tasks from the task list
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  // editing tasks from task list
  const editTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          name: newName,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  

  const todaysDate = new Date().toLocaleDateString();

  return (
    <div className="task-list-container">
      <h2 className="new-task-heading">To do list for {todaysDate}</h2>
      <div className="tasks-and-input-container">
        <TaskList tasks = {tasks} toggleTask = {toggleTask} deleteTask = {deleteTask} editTask = {editTask}/>
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
    </div>
  );
};

export default NewTask;
