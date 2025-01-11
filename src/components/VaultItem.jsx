import React, { useState, useContext } from "react";
import { VaultContext } from "../context/VaultContext";

const VaultItem = ({ item, index }) => {
  const { deleteItem, editItem } = useContext(VaultContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({
    url: item.url,
    username: item.username,
    password: item.password,
  });

  // Function to copy the password to clipboard
  const copyPassword = () => {
    navigator.clipboard.writeText(item.password).then(() => {
      alert("Password copied to clipboard!");
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const saveEdit = () => {
    editItem(index, editedItem); // Update the item in VaultContext
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="vault-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="url"
            value={editedItem.url}
            onChange={handleEditChange}
            placeholder="Site URL"
            className="input-field"
          />
          <input
            type="text"
            name="username"
            value={editedItem.username}
            onChange={handleEditChange}
            placeholder="Username"
            className="input-field"
          />
          <input
            type="password"
            name="password"
            value={editedItem.password}
            onChange={handleEditChange}
            placeholder="Password"
            className="input-field"
          />
          <button onClick={saveEdit} className="save-btn">Save</button>
          <button onClick={cancelEdit} className="cancel-btn">Cancel</button>
        </div>
      ) : (
        <>
          <p className="vault-field">Site: {item.url}</p>
          <p className="vault-field">Username: {item.username}</p>
          <p className="vault-field">Password: ******</p>

          <button className="copy-btn" onClick={copyPassword}>
            Copy Password
          </button>

          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button className="delete-btn" onClick={() => deleteItem(index)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default VaultItem;
