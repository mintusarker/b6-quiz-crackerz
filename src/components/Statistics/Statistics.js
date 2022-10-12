import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const totalData = useLoaderData();
    const data = totalData.data
    const {total, name} = totalData;
    console.log(totalData)
    return (
        <div className='container'>

            <ResponsiveContainer  width={450} height={400} >       
            <LineChart data = {data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <Line type="monotone" dataKey="name" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis dataKey= "total"/>
                <Tooltip></Tooltip>
            </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;