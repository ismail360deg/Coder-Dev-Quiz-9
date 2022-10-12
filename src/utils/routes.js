import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Statistics from "../components/Statistics";
import QuizDetails from "../components/QuizDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('quiztopics.json'),
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/home',
                loader: async () => {
                    return fetch(' https://openapi.programming-hero.com/api/quiz/')
                },
                element: < Home ></Home >
            },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blog', element: <Blog></Blog> },
            {
                path: '/quizs/:quizsId',
                loader: async ({ params }) => {
                    // console.log(params.quizsId)
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizsId}`)
                },
                element: <QuizDetails></QuizDetails>
            },
        ]
    }
])


export default router