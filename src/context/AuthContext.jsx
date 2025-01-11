import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (email, password) => {
    // Replace with actual authentication logic
    if (email === "test@test.com" && password === "password") {
      // Use a callback to ensure that navigation happens after state update
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  React.useEffect(() => {
    // Only navigate after authentication is true
    if (isAuthenticated) {
      navigate("/vault");
    }
  }, [isAuthenticated, navigate]);  // Effect runs when authentication state changes

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
