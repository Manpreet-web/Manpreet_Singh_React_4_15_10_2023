import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    accessToken: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate a random 16 byte access token
    const accessToken = Math.random().toString(36).substring(7, 23);

    // Update the user state with the access token
    setUser({
      ...user,
      accessToken,
    });

    // Store the user state in Context
    // ...

    // Redirect the user to the profile page
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(event) => setUser({ ...user, name: event.target.value })}
      />
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;