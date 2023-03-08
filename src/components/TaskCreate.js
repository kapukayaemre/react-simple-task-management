import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    onCreate(title, description);
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
