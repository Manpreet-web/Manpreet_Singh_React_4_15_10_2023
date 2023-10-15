import React, { useState } from "react";
import UserContext from "./UserContext";
import App from "./App";

const Index = () => {
  const [user, setUser] = useState({
    // ...
  });

  return (
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  );
};