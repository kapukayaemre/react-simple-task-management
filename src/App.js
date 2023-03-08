import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, description) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        description,
      },
    ];
    //! Set New Task
    setTasks(createdTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
