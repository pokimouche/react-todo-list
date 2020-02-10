import React from "react";
import Task from "./Task";

const TaskList = props => {
  return (
    <div>
      <ul className="task-list">
        {props.tasks.map((element, index) => {
          return (
            <Task
              tasks={props.tasks}
              setTasks={props.setTasks}
              key={index}
              index={index}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
