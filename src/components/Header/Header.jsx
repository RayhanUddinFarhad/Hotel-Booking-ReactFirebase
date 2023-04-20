import React from 'react';

const Header = () => {


    
    return (
        <div className='mt-6'>


            <div className="hero h-96" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1661964298224-7747aa0ac10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hotel Al-Arbah</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success">Book Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;