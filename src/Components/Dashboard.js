// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('authToken'); // Remove token from local storage
//         localStorage.removeItem('username'); // Remove username from local storage
//         navigate('/login'); // Redirect to login page
//     };

//     // Retrieve username from local storage
//     const username = localStorage.getItem('username');

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//             <h1 className="text-3xl font-bold">Welcome, {username}!</h1>
//             <button 
//                 onClick={handleLogout} 
//                 className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//             >
//                 Logout
//             </button>
//         </div>
//     );
// };

// export default Dashboard;
