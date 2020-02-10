import React from "react";

const Button = props => {
  const createTask = event => {
    event.preventDefault();
    const newTasks = [...props.tasks];
    newTasks.push({
      title: props.taskField,
      isDone: false
    });
    props.setTasks(newTasks);
    props.setOperation("create");
  };

  return (
    <div>
      <button className="add-task" type="submit" onClick={createTask}>
        Add task
      </button>
    </div>
  );
};

export default Button;
