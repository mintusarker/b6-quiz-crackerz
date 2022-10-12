
import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <div className='navber-start'>

    <nav class="navbar">
  <div class="container">
  <div className='m-2 text-warning'><h2>Learning website</h2></div>
    <form class="d-flex gap-5" role="search">
          <Link className='text-decoration-none' to="/topics">Topics</Link>
          <Link  className='text-decoration-none' to="/statistics">Statistics</Link>
          <Link className='text-decoration-none' to="/blogs">Blog</Link>
     </form>
   </div>
</nav>
            
        </div>
    
    );
};

export default Navber;
