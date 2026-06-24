function Dashboard({ users, tasks }) {
  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>👥</h2>
        <h3>{users.length}</h3>
        <p>Users</p>
      </div>

      <div className="dashboard-card">
        <h2>📋</h2>
        <h3>{tasks.length}</h3>
        <p>Tasks</p>
      </div>

      <div className="dashboard-card">
        <h2>✅</h2>
        <h3>{completed}</h3>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default Dashboard;