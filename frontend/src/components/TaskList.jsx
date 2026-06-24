import API from "../services/api";

function TaskList({ tasks = [], fetchTasks }) {
  // Delete Task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Error deleting task");
    }
  };

  // Update Task Status
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/tasks/${id}`, {
        status,
      });

      fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Error updating task");
    }
  };

  return (
    <div>
      <h2>📋 Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              <strong>Status:</strong>{" "}
              <span className={`status ${task.status.replace(/\s/g, "")}`}>
                {task.status}
              </span>
            </p>

            <p>
              <strong>Assigned To:</strong>{" "}
              {task.assignedTo ? task.assignedTo.name : "Not Assigned"}
            </p>

            <div className="task-actions">
              <select
                value={task.status}
                onChange={(e) =>
                  updateStatus(task._id, e.target.value)
                }
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Testing">Testing</option>
                <option value="Completed">Completed</option>
              </select>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task._id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;