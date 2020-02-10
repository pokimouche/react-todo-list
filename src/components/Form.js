import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import Button from "./Button";
import API from "../utils/API";
const Form = props => {
  const [taskField, setTaskField] = useState("");

  const [operation, setOperation] = useState("");

  useEffect(() => {
    try {
      // Load async data from an inexistent endpoint.
      if (operation === "create") {
        setOperation("");
        async function fetchData() {
          const response = await API.post("createTask", {
            title: taskField,
            isDone: false
          });
          setTaskField("");

          console.log("👉 Returned data:", response);
        }
        fetchData();
      }
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }, [operation, taskField]);

  return (
    <form>
      <InputText taskField={taskField} setTaskField={setTaskField}></InputText>
      <Button
        tasks={props.tasks}
        setTasks={props.setTasks}
        taskField={taskField}
        setTaskField={setTaskField}
        setOperation={setOperation}
      ></Button>
    </form>
  );
};

export default Form;
