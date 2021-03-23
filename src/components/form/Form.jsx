import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import "./Form.scss";

const Form = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  console.log(currentUser);
  console.log(error);
  return (
    <form className="form" action="sign-in" onSubmit={handleSubmit}>
      <span className="form__title">Sign In</span>
      <div className="input-container">
        <input
          className="input"
          placeholder="Email"
          type="email"
          aria-label="sing-in"
          ref={emailRef}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          label="Password"
          ref={passwordRef}
        />
      </div>
      <button className="button" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Form;
