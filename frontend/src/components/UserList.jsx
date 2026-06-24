import { useState } from "react";
import API from "../services/api";

function UserList({ users, fetchUsers }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const deleteUser = async (id) => {
    try {
      await API.delete(`/users/${id}`);
      fetchUsers();
      setActiveMenu(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>👥 Users</h2>

      {users.map((user) => (
        <div className="user-card" key={user._id}>
          <div className="user-header">

            <div>
              <h3>👤 {user.name}</h3>
              <p>📧 {user.email}</p>
            </div>

            <div className="menu-container">
              <span
                className="three-dots"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === user._id ? null : user._id
                  )
                }
              >
                ⋮
              </span>

              {activeMenu === user._id && (
                <div className="dropdown-menu">
                  <div
                    className="menu-item"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;