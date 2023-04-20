import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, load} = useContext(authContext)
    const location = useLocation()

    if(load) {


        return <progress className="progress w-56"></progress>
    }







    return (
        <div>

            {

                user ? children : <Navigate to = '/Login' state={{from: location}} replace></Navigate>
            }


            
        </div>
    );
};

export default PrivateRoute;