import { createContext, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, description) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      description,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];
    //! Set New Task
    setTasks(createdTasks);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTask);
  };

  const editTaskById = async (id, updatedTitle, updatedDescription) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      description: updatedDescription,
    });
    const afterUpdatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          description: updatedDescription,
        };
      }
      return task;
    });
    setTasks(afterUpdatedTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3004/tasks");
    setTasks(response.data);
  };

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };

  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
