import React from "react";

const Task = props => {
  let checked = props.tasks[props.index].isDone === true ? "checked" : "";
  const handleCheckBox = event => {
    const newTasks = [...props.tasks];

    if (event.target.checked) {
      // check the checkBox
      newTasks[props.index].isDone = true;
      // puts the task at the end of the list
      const temporyTask = newTasks[props.index];
      newTasks.splice(props.index, 1);
      newTasks.push(temporyTask);
    } else {
      // uncheck the checkBox
      newTasks[props.index].isDone = false;
    }

    props.setTasks(newTasks);
    //props.setOperation("update");
  };

  const removeTask = () => {
    const newTasks = [...props.tasks];
    newTasks.splice(props.index, 1);
    props.setTasks(newTasks);
  };
  return (
    <li key={props.index}>
      <input
        type="checkBox"
        onChange={handleCheckBox}
        checked={checked}
      ></input>
      <span className={checked === "checked" ? "crossed" : null}>
        {props.tasks[props.index].title}
      </span>
      <img onClick={removeTask} src="/sheet.svg" alt="sheet"></img>
    </li>
  );
};

export default Task;
