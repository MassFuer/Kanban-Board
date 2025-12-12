import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTask({ handleAddTask }) {
  const [title, setTitle] = useState("d");
  const [description, setDescription] = useState("d");
  const [assignee, setAssignee] = useState("d");
  const [status, setStatus] = useState("d");
  const [priority, setPriority] = useState("d");
  const [dueDate, setDueDate] = useState("d");

  function handleSubmitForm(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      assignee: assignee,
      status: status,
      priority: priority,
      createdDate: new Date().toISOString().split("T")[0],
      dueDate: dueDate,
    };
    console.log(newTask);
    handleAddTask(newTask);
  }
  return (
    <>
      <form onSubmit={handleSubmitForm}>
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
            Add task
          </button>
        </div>
      </form>
    </>
  );
}
export default CreateTask;
