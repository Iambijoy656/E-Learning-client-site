import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import Checkout from "../components/Checkout/Checkout";
import Course from "../components/Course/Course";
import CoursePage from "../components/CoursePage/CoursePage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../components/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/coursePage',
                element: <CoursePage></CoursePage>,
                loader: () => fetch('https://e-learning-server-site.vercel.app/allCourse')
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://e-learning-server-site.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://e-learning-server-site.vercel.app/allCourse/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://e-learning-server-site.vercel.app/allCourse/${params.id}`)
            },
            {
                path: '/profile',
                element: <Profile></Profile>

            },

        ]
    },
])