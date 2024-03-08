import React, { useState } from "react";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="email"
          placeholder="your full name"
          id="name"
          name="name"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn-up">
        Already have an account?{" "}
        <span
          className="link-btn clickable-text"
          onClick={() => navigate("/login")}
        >
          Login here.
        </span>
      </button>
    </div>
  );
};

export default Register;
