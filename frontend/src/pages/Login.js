// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Assuming the response contains the username
      const { username } = await response.json();

      // Call login function from AuthContext
      login(username);

      // Navigate to home page
      alert('Login successful! Redirecting...');
      navigate('/home');
      
    } catch (error) {
      console.error('Login error:', error);
      alert(`Login failed. Error: ${error.message}`);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
