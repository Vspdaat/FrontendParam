
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Logo from '../../asstes/parammoblogo.png';
import lgLogo from '../asstes/logo.png';
import param from '../asstes/paramname.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/login`, { email, password });
      const token = response.data.token;

      // Save the token to localStorage
      localStorage.setItem('authToken', token);
      console.log(token);
      // Assuming the response contains the user email and userId
      const userEmail = response.data.user.email;
      const userId = response.data.user._id;

      // Save email and userId to localStorage
      localStorage.setItem('email', userEmail);
      localStorage.setItem('userId', userId);

      // Redirect to the homepage after successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex flex-col gap-[25px] justify-center items-center h-screen ">
            <div  className="hidden sm:flex flex-row items-center justify-center flex-grow-0 mx-auto">
            <img src={lgLogo} alt="Logo" className="h-8 w-8 mb-1 sm:mr-2" />
            <img src={param} alt="Param Name" className="md:h-[16px] md:w-[213px] h-[10px] w-[125px] mb-1" />
          </div>
      <div className="w-full max-w-md bg-[#000E21] p-8 rounded shadow-md">


        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-[#ECBC56] text-black px-4 py-2 rounded">Login</button>
            <span onClick={() => navigate('/signup')} className="text-[#ECBC56] cursor-pointer">Create an Account</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;