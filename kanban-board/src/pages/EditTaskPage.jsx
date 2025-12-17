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
      <div className="task-edit-page">
        <form onSubmit={handleUpdateTask}>
          <div className="task-card task-edit">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="task title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            rows="5"
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
            required
          />
          {/* Try to implement radio buttons */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              margin: "10px 0",
            }}
          >
            <label>
              Priority:
              <select
                name="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
              >
                <option value="">-- None --</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>

            {/* Logic to implement */}
            <label>
              Status:
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">-- None --</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="In Review">In Review</option>
                <option value="Done">Done</option>
              </select>
            </label>
          </div>
          <label>Due Date:*</label>
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <button type="submit" className="delete">
            Edit task
          </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditTaskPage;
