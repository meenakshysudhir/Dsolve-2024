// import React from 'react'
// import {useState} from 'react';
// import axios from 'axios';
// import './Home.css';
// import {useNavigate} from 'react-router-dom';
// const Home = () => {
  
    
//         const [username, setUsername] = useState('');
//         const [password, setPassword] = useState('');


//         //trying
//         const navigate = useNavigate();
//         const handleSubmit = async () => {
//         console.log(email, password);




//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //     const response = await axios.post('http://127.0.0.1:5000', { username, password });
//     //     console.log('Login successful:', response.data);
//     //     // Redirect or show success message
//     //     } catch (error) {
//     //     console.error('Login failed:', error);
//     //     // Show error message
//     //     }
//     // };

//     return (
//         <div className='Home'>
//             <div className="borderDiv">
//             <div className="loginCard">
//                 <h2 className="Heading">Login</h2>
//                 <form onSubmit={handleSubmit} className='login'>
//                 <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit" className='loginBtn'>Log in</button>
//                 </form>
//             </div>
//             </div>
//         </div>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            console.log('Login successful:', response.data);
            // Redirect to profile page
            navigate('/Profile');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Invalid credentials");
            } else {
                console.error('Login failed:', error);
            }
        }
    };

    return (
        <div className='Home'>
            <div className="borderDiv">
                <div className="loginCard">
                    <h2 className="Heading">Login</h2>
                    <form onSubmit={handleSubmit} className='login'>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className='loginBtn'>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
