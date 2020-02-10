import React, { useState, useEffect } from "react";
import API from "./utils/API";
import "./css/reset.css";
import "./App.css";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  //const [search, setSearch] = useState([]);

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    try {
      // Load async data from an inexistent endpoint.

      async function fetchData() {
        const response = await API.get("findTask/");

        setTasks(response.data);
        console.log("👉 Returned data:", response);
      }
      fetchData();
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  }, [setTasks]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src="/toDoList.svg" alt="todo logo"></img>
          <h1>TodoList</h1>
        </div>
      </header>
      <main>
        <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
        <Form tasks={tasks} setTasks={setTasks}></Form>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
