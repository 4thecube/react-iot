import React from "react";

import { useAuth } from "../../contexts/AuthContext";

import "./Logout.scss";

const Logout = () => {
  const { signout } = useAuth();

  return (
    <button onClick={signout} className="logout">
      Log out
    </button>
  );
};

export default Logout;
