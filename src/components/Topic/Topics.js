import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Topics = () => {
   

    const topics = useLoaderData();

    console.log(topics)
    return (
        <div className='d-flex container my-5 gap-4'>
          {
            topics.data.map(subject => <Cart
            subject = {subject}></Cart>)
          }
        </div>
    );
};

export default Topics;