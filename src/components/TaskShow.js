import React from "react";

function TaskShow({ task }) {
  console.log(task);
  return (
    <div className="task-show">
      <h3 className="task-title"> Task Title </h3>
      <p>{task.title}</p>
      <h3 className="task-title"> Task Description </h3>
      <p> {task.description} </p>
      <div>
        <button className="task-delete">
          <b>Delete</b>
        </button>
        <button className="task-edit">
          <b>Update</b>
        </button>
      </div>
    </div>
  );
}

export default TaskShow;
