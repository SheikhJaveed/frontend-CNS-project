import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { VaultContext } from "../context/VaultContext";
import VaultItem from "../components/VaultItem";
import AddItemModal from "../components/AddItemModel";

const VaultPage = () => {
  const { logout } = useContext(AuthContext);
  const { items } = useContext(VaultContext);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="vault-container">
      <header>
        <h1>Vault</h1>
        <button onClick={logout}>Logout</button>
      </header>
      <button onClick={() => setModalOpen(true)}>Add Item</button>
      <div className="vault-items">
        {items.map((item, index) => (
          <VaultItem key={index} item={item} index={index} />
        ))}
      </div>
      {isModalOpen && <AddItemModal closeModal={() => setModalOpen(false)} />}
    </div>
  );
};

export default VaultPage;
