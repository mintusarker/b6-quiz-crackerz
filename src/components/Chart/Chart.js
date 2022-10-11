import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({subject}) => {
    const {total, name} = subject;
    return (
        <div>
            {/* total : {subject.total} */}
            <LineChart width={500} height={400}>
            <Line type="monotone" dataKey={total} stroke="#82ca9d" />
            <XAxis dataKey= {total} />
               <YAxis/>
               <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default Chart;
