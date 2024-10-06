import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', formData);

      if (response.data.token) {
        const token = response.data.token;
        console.dir(token); // Optional: Log the token for debugging

        // Securely store the token (consider using HttpOnly cookies)
        localStorage.setItem('token', token); // Temporary solution (see note)

        // Redirect to the dishes page after successful login
        navigate('/dishes');
      } else {
        // Handle unsuccessful login (e.g., display error message)
        console.error('Login failed: Invalid credentials or server error');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle network errors or other unexpected issues
    }
  };

  // Optional: Clear any existing token on component mount (for security)
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;