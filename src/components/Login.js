import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verify the user's credentials
    // ...

    // Store the user state in Context
    // ...

    // Redirect the user to the profile page
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(event) => setUser({ ...user, password: event.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;