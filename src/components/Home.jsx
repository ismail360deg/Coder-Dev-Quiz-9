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

                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;