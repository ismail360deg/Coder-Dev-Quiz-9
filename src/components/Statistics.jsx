import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: 'React',
            Quize: 8,
        },
        {
            name: 'Javascript',
            Quize: 9,
        },
        {
            name: 'CSS',
            Quize: 8,
        },
        {
            name: 'Git',
            Quize: 9,
        },
    ];
    return (
        <div >
            <ResponsiveContainer className='mt-[200px] md:mt-[200px] sm:mt-[200px]' width={350} height={300}>
                <BarChart width={500} height={400} data={data}>
                    <Bar dataKey="Quize" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;