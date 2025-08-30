import { createRoot } from 'react-dom/client'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUS/ContactUs';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users/>
      },
      {
        path: '/user/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails/>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts/>
      },
      {
        path: '/post/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<PostDetails/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
)
