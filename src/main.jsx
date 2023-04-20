import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Main/Home';
import Hotels from './components/Main/Hotels';
import LogIn from './components/Main/LogIn';
import Register from './components/Main/Register';
import AuthProvider from './components/Provider/AuthProvider';
import Booking from './components/Main/Booking';
import PrivateRoute from './components/Main/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,

    children : [


      {


        path : '/',
        element : <Home/>




      },

      

      {
        path : 'hotel',
        element : <Hotels/>


      },

      {
        path : 'Login',
        element : <LogIn/>
      },

      {

        path : 'register',
        element : <Register/>
      },

      {

        path : 'booking',
        element : <PrivateRoute><Booking/></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>    <RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
