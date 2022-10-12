
import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <div>

    <nav class="navbar bg-light">
  <div class="container-fluid">
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


//     <nav className='navber'>
    //     <div className='m-5 text-warning'><h2>Learning website</h2></div>
    //     <div className='btn-btn'>
    //         <Link to="/topics">Topics</Link>
    //         <Link to="/statistics">Statistics</Link>
    //         <Link to="/blogs">Blog</Link>     
    //     </div>
    //    </nav>  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">