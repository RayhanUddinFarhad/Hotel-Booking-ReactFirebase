import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user, Logout} = useContext(authContext)



    const handleLogOut = () => {


        Logout()




    }
    return (
        <div className='space-x-5 text-xl dont-bold'>


            <h4>{ user &&
            
            
            user.email}</h4>

            <Link to = '/'>Home</Link>
            <Link to = '/hotel'>Hotels</Link>


            {
                user ?               <Link onClick={handleLogOut}>Log Out</Link> :
                <Link to = '/login'>Log In</Link>

            }



            
        </div>
    );
};

export default Navbar;