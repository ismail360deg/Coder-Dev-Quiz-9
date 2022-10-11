import React from 'react'


const Quiz = ({ quiz }) => {

    const { logo, name, total } = quiz

    return (


        <div className='bg-gray-100 p-6 rounded shadow-lg'>
            <img
                className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                src={logo}
                alt=''
            />
            <p className='text-gray-700 text-2xl font-bold'>Name: {name}</p>
            <p className='text-gray-700 '>Total Quiz: {total}</p>


            <button

                type='button'
                className='px-8 block w-full mt-4 py-3 rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400 font-bold'
            >
                Start Practise
            </button>


        </div>


    );
};

export default Quiz