import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTask({ handleAddTask }) {
  const [title, setTitle] = useState("d");
  const [description, setDescription] = useState("d");
  const [assignee, setAssignee] = useState("d");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("d");

  const today = new Date().toISOString().split("T")[0];

  function handleSubmitForm(e) {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      assignee: assignee,
      status: status,
      priority: priority,
      createdDate: today,
      dueDate: dueDate,
    };
    console.log(newTask);
    handleAddTask(newTask);
  }
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="task-form">
          <label>
            Title:*
            <input
              type="text"
              name="title"
              value={title}
              placeholder="task title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Description:*
            <input
              type="text"
              name="description"
              value={description}
              placeholder="task description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label>
            Assignee:*
            <input
              type="text"
              name="assignee"
              value={assignee}
              placeholder="task assignee"
              onChange={(e) => setAssignee(e.target.value)}
              required
            />
          </label>
          {/* Try to implement radio buttons */}
          <label>
            Priority:*
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
            Status*:
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">-- None --</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="In Review">In Review</option>
              <option value="Done">Done</option>
            </select>
          </label>
          <label>
            Due Date:*
            <input
              type="date"
              name="dueDate"
              min={today}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
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
