import React, { useContext } from 'react';
import Quiz from './Quiz';
import { QuizContext } from './Root'

const Home = () => {
    const quizs = useContext(QuizContext)
    console.log(quizs)
    return (
        <div>



            <section className="py-6 sm:py-12 bg-gray-200 text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-5xl font-bold">WelCome <br /> To My <br /> Coding Dev Quiz</h2>

                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">



                        {quizs.map(quiz => (
                            <Quiz
                                key={quiz.id}
                                quiz={quiz}
                            >
                            </Quiz>
                        ))}







                        {/* <article className="flex flex-col bg-gray-50">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Convenire</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>June 1, 2020, {quizs.length}</span>
                                    <span>2.1K views</span>
                                </div>
                            </div>
                        </article> */}
                        {/* <article className="flex flex-col bg-gray-50">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Convenire</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>June 2, 2020</span>
                                    <span>2.2K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-50">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Convenire</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>June 3, 2020</span>
                                    <span>2.3K views</span>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col bg-gray-50">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Convenire</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>June 4, 2020</span>
                                    <span>2.4K views</span>
                                </div>
                            </div>
                        </article> */}
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;