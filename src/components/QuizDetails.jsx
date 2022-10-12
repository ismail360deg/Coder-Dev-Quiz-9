import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = () => {
    const quizTopic = useLoaderData();
    const data = quizTopic?.data?.questions;

    const handleAnsIcon = (ans) => {
        // alert(ans)
        toast.success(ans, 'Correct Answer!', { autoClose: 500 })
    }

    const handleQuizAns = (e, correctAnswer) => {
        console.log(e, correctAnswer);
        if (e === correctAnswer) {
            toast.success('Correct Answer!', { autoClose: 500 })
        }
        else {
            toast.warning('Wrong Answer!', { autoClose: 500 })
        }
    }
    return (
        <div>
            {
                data.map(d => <div key={d.id} className='bg-slate-400 lg:w-1/2 md:w-4/5 sm:w-11/12 w-full mb-10 p-10 rounded-xl mx-auto relative '>
                    <EyeIcon onClick={() => handleAnsIcon(d.correctAnswer)} className='absolute top-10 right-10 w-7 h-7 text-white'></EyeIcon>
                    <div className='justify-items-center'>

                        <h1 className='text-4xl '>Question Name: <span dangerouslySetInnerHTML={{ __html: d.question }}></span></h1>

                        <ul className='text-2xl'>

                            {
                                d.options.map((e, index) => <li
                                    key={index}
                                    onClick={() => handleQuizAns(e, d.correctAnswer)}>
                                    <input type="radio" name='answer' id='a' className='answer cursor-pointer' />
                                    <label className='' htmlFor="a" id='a_text'>{e}</label>
                                </li>)
                            }

                        </ul>
                    </div>
                </div>)
            };
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )

};

export default QuizDetails;





