import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VaultPage from "./pages/VaultPage";
import SignupForm from "./components/SignupForm"; // Import SignupForm
import { AuthProvider } from "./context/AuthContext";
import { VaultProvider } from "./context/VaultContext";
import './App.css'
const App = () => {
  return (
    <Router>
    <AuthProvider>
      <VaultProvider>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vault" element={<VaultPage />} />
            <Route path="/signup" element={<SignupForm />} />  {/* Use SignupForm here */}
          </Routes>
        
      </VaultProvider>
    </AuthProvider>
    </Router>
  );
};

export default App;
