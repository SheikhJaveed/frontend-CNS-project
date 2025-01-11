import React from "react";

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <h1>Decentralized Password Manager</h1>
      {onLogout && <button onClick={onLogout}>Logout</button>}
    </header>
  );
};

export default Header;
