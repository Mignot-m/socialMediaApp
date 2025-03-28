import React, { useState } from "react";
import './register.scss'
import axios from 'axios'
import { Link } from "react-router-dom";

const Register = () => {
    const [inputs, setInputs] = useState({
      username: "",
      email: "",
      password: "",
      name: ""
    });
     const [error, setError] = useState(null);
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  const handleClick = async (e) => {
  e.preventDefault(); // Prevent page reload
  try {
    const response = await axios.post("http://localhost:8800/api/auth/register", inputs);
    console.log("Registration successful:", response.data);
  } catch (error) {
    console.error("Error during registration:", error.response?.data || error.message);
    setError(error.response?.data.error || "An unexpected error occurred");
  }
};
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Mignot Social</h1>
          <p>
            lorem Neque porro quisquam est qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit...
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
