import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./SignIn.scss";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value).catch(
        (error) => {
          setError(error.message);
        }
      );
      history.push("/");
    } catch {}

    setLoading(false);
  }
  return (
    <div className="sign-in">
      <div className="sign-in__form-container">
        <form className="form" action="sign-in" onSubmit={handleSubmit}>
          <span className="form__title">Sign into your account</span>
          <div className="form__input-container">
            <input
              className="input"
              placeholder="hello@domain.com"
              type="email"
              ref={emailRef}
            />
            <input
              className="input"
              type="password"
              placeholder="**********"
              ref={passwordRef}
            />
          </div>
          <span className="tip">For login use email: dot@dot.ua | password: 12345678</span>
          <span className="error">{error}</span>
          <button className="button" type="submit">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
