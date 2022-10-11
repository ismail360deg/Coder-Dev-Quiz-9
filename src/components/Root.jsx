import React, { createContext } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLoaderData } from 'react-router-dom';


export const QuizContext = createContext([]);

const Root = () => {
    const quizs = useLoaderData()


    return (
        <QuizContext.Provider value={quizs}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizContext.Provider>
    );
};

export default Root;