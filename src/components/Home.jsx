import React, { useContext } from 'react';
import Quiz from './Quiz';
import { QuizContext } from './Root'

import { Link, useLoaderData } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

const Home = () => {
    const quizs = useContext(QuizContext)

    // const topic = useLoaderData();
    // console.log(topic);


    return (
        <section>
            <div className="bg-gray-200">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h2 className="text-5xl font-bold">WelCome <br /> To My <br /> Coding Dev Quiz</h2>
                    <p className="text-2xl font-semibold">There are some topic quiz by <br /> react,javascript,css and git. <br /> So, try your coding knowledge with coding-dev-quize website.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/shop">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                            >
                                Quize
                            </button>
                        </Link>
                        <Link to="/about">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
                            >
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src={heroImg}
                alt=""
                className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
            />




            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">



                {quizs.map(quiz => (
                    <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    >
                    </Quiz>
                ))}



            </div>
        </section>
    );
};

export default Home;

