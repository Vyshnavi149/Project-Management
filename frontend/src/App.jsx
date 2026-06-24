import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import API from "./services/api";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchTasks();
  }, []);

 return (
  <>
    <Navbar />

    <Dashboard  users={users} tasks={tasks} />

    <div className="container">

      <div className="card">
        <UserForm fetchUsers={fetchUsers} />
      </div>

      <div className="card">
        <TaskForm fetchTasks={fetchTasks} />
      </div>

      <div className="card">
        <UserList users={users} fetchUsers={fetchUsers} />
      </div>

      <div className="card">
        <TaskList tasks={tasks} fetchTasks={fetchTasks} />
      </div>

    </div>
  </>
);
}

export default App;