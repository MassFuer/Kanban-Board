import { useState } from "react";
import { useParams } from "react-router-dom";

function EditTaskPage({ tasks, handleEditTask }) {
  // grab the ID from URL
  const { taskId } = useParams();
  const taskToEdit = tasks.find((task) => task.id == taskId);

  const [title, setTitle] = useState(taskToEdit.title);
  const [description, setDescription] = useState(taskToEdit.description);
  const [assignee, setAssignee] = useState(taskToEdit.assignee);
  const [status, setStatus] = useState(taskToEdit.status);
  const [priority, setPriority] = useState(taskToEdit.priority);
  const [dueDate, setDueDate] = useState(taskToEdit.dueDate);

  function handleUpdateTask(e) {
    e.preventDefault();
    const updatedTask = {
      ...taskToEdit,
      title: title,
      description: description,
      assignee: assignee,
      status: status,
      priority: priority,
      dueDate: dueDate,
    };
    handleEditTask(updatedTask);
  }
  return (
    <>
      <form onSubmit={handleUpdateTask}>
        <div className="task-card">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="task title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            placeholder="task description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Assignee:</label>
          <input
            type="text"
            name="assignee"
            value={assignee}
            placeholder="task assignee"
            onChange={(e) => setAssignee(e.target.value)}
          />
          {/* Try to implement radio buttons */}
          <label>
            Priority:
            <select
              name="status"
              value={status}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">-- None --</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>

          {/* Logic to implement */}
          <label>
            Status:
            <select
              name="priority"
              value={priority}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">-- None --</option>
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="inReview">In Review</option>
              <option value="done">Done</option>
            </select>
            <label>Due Date:</label>
            <input
              type="text"
              name="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </label>
          <button type="submit" className="delete">
            Edit task
          </button>
        </div>
      </form>
    </>
  );
}
export default EditTaskPage;
