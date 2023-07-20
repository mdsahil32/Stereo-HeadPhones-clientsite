import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayOut/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import HeadphoneDetail from "../Pages/HeadphoneDetail/HeadphoneDetail";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
              path: 'headphone/:id',
              element: <HeadphoneDetail></HeadphoneDetail>,
              loader: ({params}) => fetch(`http://localhost:5000/headphones/${params.id}`)
            }
        ]
    }
  ])
  export default router;