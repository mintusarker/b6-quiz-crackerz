import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Topics.css';

const Topics = () => {
  const [data , setData] = useState([])
  useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/quiz`)
    .then(res => res.json())
    .then(data => setData(data.data))
  },[])

    return (

       <div>
        <div className='banner'>
        <p className='heading-line'>No matter what your coding goals are, the best place to start is by building a <br /> strong foundation. Similar to a college course, this Path will teach you how to <br /> think and code like a professional. You will learn Computer Science fundamentals, <br /> build a professional portfolio, and prepare for an entry-level role in tech.</p>
        </div>
        <div className='d-flex container my-5 gap-4'>
         {
          data.map(subject => <Cart
          subject = {subject}
          ></Cart>)
         }
      
        </div>
       </div>
    );
};

export default Topics;

