
import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <nav className='navber'>
        <div className='m-5 text-warning'><h2>Learning website</h2></div>
        <div className='btn'>
            <Link to="/topics">Topics</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/blogs">Blog</Link>
        </div>
       </nav>
    );
};

export default Navber;


