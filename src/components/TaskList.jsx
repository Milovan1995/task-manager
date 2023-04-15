import React from "react";
import EveryDayTasks from "./DailyTasks";

const TaskList = () => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
            {EveryDayTasks.map((task) => (
                <li key = {task.id}>{task.name}</li>
            ))};
            </ul>
        </div>
    );
};
export default TaskList;

