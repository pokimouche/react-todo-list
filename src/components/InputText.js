import React from "react";

const InputText = props => {
  const handleText = event => {
    const taskValue = event.target.value;
    props.setTaskField(taskValue);
  };

  return (
    <div>
      <input
        autoComplete="off"
        className="task-field"
        onChange={handleText}
        type="text"
        value={props.taskField}
        name="task"
        placeholder="Enter task"
      ></input>
    </div>
  );
};

export default InputText;
