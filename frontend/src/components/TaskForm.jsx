import { useEffect, useState } from "react";
import API from "../services/api";

function TaskForm({ fetchTasks }) {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/tasks", {
      title,
      description,
      assignedTo,
    });

    setTitle("");
    setDescription("");
    setAssignedTo("");

    fetchTasks();
  };

  return (
    <div>
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
        >
          <option value="">Select User</option>

          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>

        <br /><br />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default TaskForm;