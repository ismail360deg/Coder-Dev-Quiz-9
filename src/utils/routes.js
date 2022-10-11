
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/home',
                loader: () => fetch('quiztopics.json'),
                element: <Home></Home>
            },
            { path: '/blog', element: <Blog></Blog> },
        ]
    }
])


export default router