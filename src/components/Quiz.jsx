import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, logo, name, total } = quiz
    const quizTopic = useLoaderData();
    console.log(quizTopic);

    return (
        <div className='bg-gray-300  p-6 rounded-lg shadow-lg'>
            <img
                className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                src={logo}
                alt=''
            />
            <p className='text-gray-700 text-2xl font-bold'> {name}</p>
            <p className='text-gray-700 '>Total Quiz: {total}</p>

            <div className='flex relative'>
                <Link className='px-16 block w-full mt-4 py-3 rounded-full bg-cyan-400 text-gray-800 hover:bg-cyan-700 font-bold' to={`/quizs/${id}`}> Start Quize</Link>
                <ArrowRightIcon className="h-5 w-5 text-black-500 absolute ml-56 mt-8" > </ArrowRightIcon>
            </div>

        </div>
    );
};

export default Quiz