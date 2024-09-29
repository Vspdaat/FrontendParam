import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import lgLogo from '../asstes/logo.png';
import param from '../asstes/paramname.png';
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');  // Added state for gender
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_BACKEND_URL);
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', gender);  // Include gender in formData
   
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/register`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Signup failed:', error.response.data.message);
            alert('Signup failed. Please try again.');
        }
    };
console.log(process.env.REACT_APP_BACKEND_URL);
    return (
        <div className=" mb-[35px] pt-16 flex  flex-col justify-center bg-radial-white-black from-blue-900 to-black  items-center h-screen bg-gray-100">
            <div  className="hidden sm:flex flex-row items-center justify-center flex-grow-0 mx-auto">
            <img src={lgLogo} alt="Logo" className="h-8 w-8 mb-1 sm:mr-2" />
            <img src={param} alt="Param Name" className="md:h-[16px] md:w-[213px] h-[10px] w-[125px] mb-1" />
          </div>

            <div className="w-full max-w-md bg-[#000E21] p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full  text-black px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 text-black py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className=" text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="" className='text-black'>Select Gender</option>
                            <option value="male" className='text-black'>Male</option>
                            <option value="female" className='text-black'>Female</option>
                            <option value="other" className='text-black'>Other</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-[#ECBC56] text-black px-4 py-2 rounded">Sign Up</button>
                        <span onClick={() => navigate('/login')} className=" text-[#ECBC56] cursor-pointer">Already have an account?</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
