import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import './Cart.css'

const Cart = ({subject}) => {
    const {id, name, logo, total} = subject;
    return (
        <div className='border rounded border-success p-1'>
          <div>
          <img className="img-fluid bg-primary bg-opacity-75" src= {logo} alt="" />
           <h5>{name}</h5>
           <p>Total:{total}</p>
           <Link to={`/subject/${id}`}><button className='bg-info border border-0'>Start Practice <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button></Link>
          </div>
        </div>
    )
};

export default Cart;