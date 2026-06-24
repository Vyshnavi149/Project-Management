import { useState } from "react";
import API from "../services/api";

function UserForm({ fetchUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/users", {
        name,
        email,
      });

      

      setName("");
      setEmail("");

      fetchUsers();
    } catch (error) {
      console.log(error);
      alert("Error adding user");
    }
  };

  return (
    <div>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserForm;