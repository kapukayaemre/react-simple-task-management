import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const createTask = (title, description) => {
    console.log(title, description);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Task List</h1>
      <TaskList />
    </div>
  );
}

export default App;
