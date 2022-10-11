import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    const totalData = useLoaderData();
    console.log(totalData)
    return (
        <div>
            <h2>this is chart</h2>

            {
            totalData.data.map(subject => <Chart 
                key = {subject.id}
                subject = {subject}></Chart>
             )
          }
        </div>
    );
};

export default Statistics;