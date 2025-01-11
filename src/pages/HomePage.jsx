import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import the Link component
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const HomePage = () => {
  const [showLogin] = useState(true);

  return (
    <div className="home-container">
      <header>
        <h1>VaultCipher - Decentralized Password Manager</h1>
      </header>
      {showLogin ? (
        <>
          <LoginForm />
          <p>
            Don't have an account?{" "}
            {/* Use Link to redirect to the signup page */}
            <Link to="/signup">SignUp</Link>
          </p>
        </>
      ) : (
        <>
          <SignupForm />
          <p>
            Already have an account?{" "}
            {/* Use Link to redirect to the login page */}
            <Link to="/">Login</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
