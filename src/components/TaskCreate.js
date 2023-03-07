import React from "react";

function TaskCreate() {
  return (
    <div className="task-create">
      <h3>Add New Task!</h3>
      <form className="task-form">
        <label className="task-label">Task Title</label>
        <input className="task-input" />
        <label className="task-label">Task Content</label>
        <textarea className="task-input" rows={5} />
        <button className="task-button">Set Task</button>
      </form>
    </div>
  );
}

export default TaskCreate;
