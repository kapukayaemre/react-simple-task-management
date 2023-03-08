import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedDescription) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedDescription);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title"> Task Title </h3>
          <p>{task.title}</p>
          <h3 className="task-title"> Task Description </h3>
          <p> {task.description} </p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              <b>Delete</b>
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              <b>Edit</b>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
