import React, { useState, useContext } from "react";
import { VaultContext } from "../context/VaultContext";

const AddItemModal = ({ closeModal }) => {
  const { addItem } = useContext(VaultContext);
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ url, username, password });
    closeModal();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Site URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Add</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default AddItemModal;
