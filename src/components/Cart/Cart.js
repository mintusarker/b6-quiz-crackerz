import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import './Cart.css'

const Cart = ({subject}) => {
    const {id, name, logo, total} = subject;
    return (
        <div className='border rounded bg-info bg-opacity-25 border-success p-1'>
          <div>
          <img className="img-fluid bg-primary bg-opacity-75" src= {logo} alt="" />
           <h5>{name}</h5>
           <p>Total:{total}</p>
           <Link to={`/subject/${id}`}><button className='btn btn-info p-2 w-100 text-white fs-5 '>Start Quiz <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>
          </div>
        </div>
    )
};

export default Cart;