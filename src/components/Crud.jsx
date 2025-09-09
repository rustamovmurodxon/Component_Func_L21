import React, { useState } from "react";
import { Link } from "react-router-dom";

const Crud = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "Doe", age: 32 },
  ]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    age: "",
  });
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setUsers(users.map((user) => (user.id === editId ? form : user)));
      setEditId(null);
    } else {
      setUsers([...users, { ...form, id: Date.now().toString() }]);
    }
    setForm({ id: "", name: "", age: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
        <input
          className="border mx-0.5 rounded-md "
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="border mx-0.5 rounded-md "
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <button
          className="border px-3 py-1 mt-0.5 bg-blue-200 rounded-xl"
          type="submit"
        >
          {editId ? "Update" : "Add"}
        </button>
        <button className="border px-3 py-1 mt-0.5 bg-red-400 rounded-xl" type="button"><Link to={"/home"}>Go back</Link></button>
      </form>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="border w-2xs rounded-md bg-amber-100 m-2.5"
          >
            Name: <strong>{user.name}</strong> <br />
            Age:{" "}
            <strong>{user.age}</strong> <br /> Gender:{" "}
            <button
              className="border mx-2 px-2 rounded-md bg-green-400"
              onClick={() => handleEdit(user)}
            >
              Edit
            </button>
            <button
              className="border px-2 mx-2 rounded-md bg-red-600"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
