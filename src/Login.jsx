import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setError('');

    // Basic validation
    if (!email.trim()) {
      setError('Email is required.');
      return;
    }

    // Check for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Invalid email format.');
      return;
    }

    if (!password.trim()) {
      setError('Password is required.');
      return;
    }

    // Check for minimum password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Perform your login logic here (e.g., using Firebase authentication)
    // If login is successful, you can redirect the user to another page
    // If login fails, update the error state with an appropriate message
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-4 md:p-10 rounded-lg shadow-md w-full md:w-96">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">Login</h1>
        <form className="space-y-3" onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              id="Email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <p className="text-red-500">{error}</p>
          <Link to='/app1'>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-full hover:bg-blue-700"
            >
              Log In
            </button>
          </Link>
        </form>
        <div className="mt-4 text-sm text-gray-600 flex flex-col items-center">
          <p className="mb-2 md:mb-0">Don't have an account?</p>
          <Link to="/signup">
            <button className="text-green-500 underline">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
