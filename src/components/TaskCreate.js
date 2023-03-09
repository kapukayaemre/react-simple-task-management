import { useState, useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    if (taskFormUpdate) {
      onUpdate(task.id, title, description);
      // editTaskById(task.id, title, description);
    } else {
      // onCreate(title, description);
      createTask(title, description);
    }
    setTitle("");
    setDescription("");

    event.preventDefault();
  };

  return (
    <div>
      {" "}
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Update This Task!</h3>
          <form className="task-form">
            <label className="task-label">Current Task Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="task-input"
            />
            <label className="task-label">Current Task Content</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Add New Task!</h3>
          <form className="task-form">
            <label className="task-label">Task Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              className="task-input"
            />
            <label className="task-label">Task Content</label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Set Task
            </button>
          </form>
        </div>
      )}{" "}
    </div>
  );
}

export default TaskCreate;
