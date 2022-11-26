import {
      Navigate
  } from "react-router-dom";

import Posts from "../../pages/Posts";
import About from "../../pages/About";
import Post from "../../pages/Post";
import Login from "../../pages/Login";
 
export  const privateRoutes=[
    {path: '/', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <Post/>},
    {path: '*', element: <Navigate to="/posts" replace/>},
]

export  const publicRoutes=[
    {path: '/login', element: <Login/>},
    {path: '*', element: <Navigate to="/login" replace/>},
]




